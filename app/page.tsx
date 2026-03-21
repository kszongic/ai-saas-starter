"use client";

import Link from "next/link";
import { ArrowRight, Bot, CreditCard, Shield, Zap, Code2, Sparkles } from "lucide-react";

const features = [
  { icon: Bot, title: "Multi-Model AI Chat", desc: "OpenAI, Anthropic, Google — switch models per conversation with streaming responses" },
  { icon: CreditCard, title: "Stripe Billing", desc: "Free, Pro & Enterprise tiers with usage limits, webhooks, and customer portal" },
  { icon: Shield, title: "Auth & RBAC", desc: "Next-Auth v5 with Google/GitHub/email. Role-based access for admin, user, and API" },
  { icon: Zap, title: "Edge-Ready", desc: "Optimized for Vercel Edge Runtime. Sub-100ms TTFB on all pages" },
  { icon: Code2, title: "Type-Safe Stack", desc: "TypeScript end-to-end. Drizzle ORM, Zod validation, tRPC-ready structure" },
  { icon: Sparkles, title: "Production Polish", desc: "Dark mode, toast notifications, loading states, error boundaries, SEO meta" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="mb-4 inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted">
            Ship your AI SaaS in days, not months
          </div>
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            The <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI SaaS</span> Starter
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Production-ready Next.js 15 template with authentication, Stripe subscriptions,
            multi-model AI chat, and admin dashboard. Everything you need to launch.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/chat" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition">
              Try Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium hover:bg-card transition">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">Everything you need to ship</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted">
          Stop rebuilding the same boilerplate. Focus on what makes your product unique.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-card p-6">
              <f.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold">Ready to launch?</h2>
          <p className="mt-3 text-muted">Get the full source code and ship your AI SaaS this weekend.</p>
          <a href="https://kszongic.gumroad.com/l/ai-saas-starter" target="_blank"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition">
            Get it for $49 <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
