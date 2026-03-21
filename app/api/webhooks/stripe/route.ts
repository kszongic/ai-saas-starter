import { stripe } from '@/lib/stripe';
import { db } from '@/lib/db';
import { users } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature')!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return new Response('Invalid signature', { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      if (!session.customer || !session.subscription) break;

      const subscription = await stripe.subscriptions.retrieve(session.subscription as string);
      const priceId = subscription.items.data[0]?.price.id;

      await db.update(users).set({
        stripeSubscriptionId: subscription.id,
        stripePriceId: priceId,
        stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
        role: 'pro',
      }).where(eq(users.stripeCustomerId, session.customer as string));
      break;
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object;
      if (!invoice.subscription) break;

      const subscription = await stripe.subscriptions.retrieve(invoice.subscription as string);
      await db.update(users).set({
        stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
      }).where(eq(users.stripeSubscriptionId, subscription.id));
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      await db.update(users).set({
        role: 'user',
        stripePriceId: null,
        stripeSubscriptionId: null,
        stripeCurrentPeriodEnd: null,
      }).where(eq(users.stripeSubscriptionId, subscription.id));
      break;
    }
  }

  return new Response('OK');
}
