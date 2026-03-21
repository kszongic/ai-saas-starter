import { createChatStream, isModelAllowed, getDailyLimit } from '@/lib/ai';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return new Response('Unauthorized', { status: 401 });
  }

  const { messages, model = 'gpt-4o-mini' } = await req.json();
  const userId = session.user.id;

  // Get user from DB
  const [user] = await db.select().from(users).where(eq(users.id, userId));
  if (!user) return new Response('User not found', { status: 404 });

  const role = user.role as 'user' | 'pro' | 'admin';

  // Check model access
  if (!isModelAllowed(role, model)) {
    return new Response(JSON.stringify({ error: 'Model not available on your plan. Upgrade to Pro for access.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Check daily limit
  const limit = getDailyLimit(role);
  const now = new Date();
  const resetAt = user.aiMessagesResetAt;
  let messagesUsed = user.aiMessagesUsed;

  // Reset counter if new day
  if (!resetAt || now.toDateString() !== resetAt.toDateString()) {
    messagesUsed = 0;
    await db.update(users).set({ aiMessagesUsed: 0, aiMessagesResetAt: now }).where(eq(users.id, userId));
  }

  if (messagesUsed >= limit) {
    return new Response(JSON.stringify({
      error: `Daily limit reached (${limit} messages). ${role === 'user' ? 'Upgrade to Pro for 500 messages/day.' : 'Limit resets tomorrow.'}`,
    }), { status: 429, headers: { 'Content-Type': 'application/json' } });
  }

  // Increment counter
  await db.update(users).set({ aiMessagesUsed: messagesUsed + 1 }).where(eq(users.id, userId));

  // Stream response
  const result = await createChatStream({ messages, model });
  return result.toDataStreamResponse();
}
