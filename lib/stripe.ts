import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
});

export const PLANS = {
  free: { name: 'Free', price: 0, messages: 20, models: ['gpt-4o-mini'] },
  pro: { name: 'Pro', price: 1900, priceId: 'price_pro_monthly', messages: 500, models: ['gpt-4o-mini', 'gpt-4o', 'claude-3-5-sonnet'] },
  enterprise: { name: 'Enterprise', price: 9900, priceId: 'price_enterprise_monthly', messages: Infinity, models: ['all'] },
} as const;

export async function createCheckoutSession(customerId: string, priceId: string, returnUrl: string) {
  return stripe.checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${returnUrl}?success=true`,
    cancel_url: `${returnUrl}?canceled=true`,
  });
}

export async function createCustomerPortal(customerId: string, returnUrl: string) {
  return stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });
}

export async function getSubscription(subscriptionId: string) {
  return stripe.subscriptions.retrieve(subscriptionId);
}
