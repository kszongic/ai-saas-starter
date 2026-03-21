import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Plan-based model access
const PLAN_MODELS = {
  user: ['gpt-4o-mini'],
  pro: ['gpt-4o-mini', 'gpt-4o', 'claude-3-5-sonnet'],
  admin: ['gpt-4o-mini', 'gpt-4o', 'claude-3-5-sonnet', 'gpt-4-turbo'],
} as const;

// Daily message limits by plan
const PLAN_LIMITS = {
  user: 20,
  pro: 500,
  admin: Infinity,
} as const;

export type UserRole = keyof typeof PLAN_MODELS;

export function getAvailableModels(role: UserRole) {
  return PLAN_MODELS[role] ?? PLAN_MODELS.user;
}

export function getDailyLimit(role: UserRole) {
  return PLAN_LIMITS[role] ?? PLAN_LIMITS.user;
}

export function isModelAllowed(role: UserRole, model: string) {
  return (getAvailableModels(role) as readonly string[]).includes(model);
}

export async function createChatStream({
  messages,
  model = 'gpt-4o-mini',
  systemPrompt,
}: {
  messages: { role: 'user' | 'assistant'; content: string }[];
  model?: string;
  systemPrompt?: string;
}) {
  return streamText({
    model: openai(model),
    system: systemPrompt ?? 'You are a helpful AI assistant.',
    messages,
  });
}
