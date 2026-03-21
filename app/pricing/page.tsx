"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "Get started with AI chat",
    features: ["10 messages/day", "GPT-4o Mini", "Basic chat history", "Community support"],
    cta: "Get Started",
    href: "/auth/signin",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    desc: "For power users and small teams",
    features: [
      "Unlimited messages",
      "All models (GPT-4o, Claude, Gemini)",
      "File uploads & vision",
      "Conversation export",
      "Priority support",
      "API access (1000 req/day)",
    ],
    cta: "Start Free Trial",
    href: "/api/checkout?plan=pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    desc: "For teams that need more",
    features: [
      "Everything in Pro",
      "Unlimited API access",
      "Custom model fine-tuning",
      "SSO / SAML",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    href: "mailto:hello@example.com",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-4xl font-bold">Simple, transparent pricing</h1>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted">
          Start free. Upgrade when you need more power.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.featured
                  ? "border-primary bg-card shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted">{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted">{plan.desc}</p>
              <Link
                href={plan.href}
                className={`mt-6 block w-full rounded-lg py-2.5 text-center text-sm font-medium transition ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border hover:bg-background"
                }`}
              >
                {plan.cta}
              </Link>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
