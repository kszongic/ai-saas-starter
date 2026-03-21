# 🚀 AI SaaS Starter — Ship Your AI Product in Days, Not Months

**The complete, production-ready boilerplate for building AI-powered SaaS applications.**

Built with Next.js 15, React 19, TypeScript, Tailwind CSS 4, Drizzle ORM, Stripe, and the Vercel AI SDK.

> **This is a premium template.** [Get it on Gumroad for $49 →](https://kszongic.gumroad.com/l/ai-saas-starter)

---

## 🎯 What You Get

### Auth & Users
- ✅ Next-Auth v5 with GitHub, Google, Email magic links
- ✅ Role-based access (user, pro, admin)
- ✅ User settings & profile pages
- ✅ Session management

### AI Features
- ✅ Streaming chat interface (Vercel AI SDK)
- ✅ Multi-model support (GPT-4, Claude, Gemini — swap with one line)
- ✅ Conversation history & persistence
- ✅ Token usage tracking per user
- ✅ Rate limiting by plan tier

### Billing & Subscriptions
- ✅ Stripe Checkout integration
- ✅ Free / Pro / Enterprise plans
- ✅ Usage-based billing support
- ✅ Webhook handlers for all Stripe events
- ✅ Customer portal for self-service

### Dashboard
- ✅ Admin dashboard with user analytics
- ✅ Revenue metrics & charts
- ✅ User management (ban, upgrade, impersonate)
- ✅ AI usage monitoring

### Infrastructure
- ✅ Drizzle ORM with PostgreSQL (Neon / Supabase / any PG)
- ✅ Edge-ready API routes
- ✅ Rate limiting middleware
- ✅ Error tracking setup (Sentry-ready)
- ✅ SEO optimized with metadata API
- ✅ One-click deploy to Vercel

## 📁 Project Structure

```
├── app/
│   ├── (auth)/           # Login, register, forgot password
│   ├── (dashboard)/      # Protected dashboard routes
│   │   ├── chat/         # AI chat interface
│   │   ├── settings/     # User settings & billing
│   │   └── admin/        # Admin panel (role-gated)
│   ├── api/
│   │   ├── ai/           # AI chat endpoints (streaming)
│   │   ├── webhooks/     # Stripe webhook handlers
│   │   └── users/        # User CRUD
│   └── (marketing)/      # Landing page, pricing, docs
├── components/
│   ├── ui/               # Reusable UI components
│   ├── chat/             # Chat interface components
│   └── dashboard/        # Dashboard widgets
├── lib/
│   ├── ai.ts             # AI provider config
│   ├── auth.ts           # Auth config
│   ├── db/               # Drizzle schema & queries
│   ├── stripe.ts         # Stripe helpers
│   └── utils.ts          # Shared utilities
└── drizzle/              # Migrations
```

## 🏁 Quick Start

```bash
# 1. Clone
git clone https://github.com/kszongic/ai-saas-starter
cd ai-saas-starter

# 2. Install
npm install

# 3. Set up env
cp .env.example .env.local
# Fill in your keys (see below)

# 4. Push database schema
npm run db:push

# 5. Run
npm run dev
```

### Required Environment Variables

```env
# Database (Neon, Supabase, or any PostgreSQL)
DATABASE_URL=postgresql://...

# Auth
AUTH_SECRET=your-secret-here
AUTH_GITHUB_ID=...
AUTH_GITHUB_SECRET=...
AUTH_GOOGLE_ID=...
AUTH_GOOGLE_SECRET=...

# AI
OPENAI_API_KEY=sk-...

# Stripe
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 💰 Pricing Plans (Pre-configured)

| Feature | Free | Pro ($19/mo) | Enterprise ($99/mo) |
|---------|------|-------------|-------------------|
| AI Messages | 20/day | 500/day | Unlimited |
| Models | GPT-3.5 | GPT-4 + Claude | All models |
| History | 7 days | Unlimited | Unlimited |
| API Access | ❌ | ✅ | ✅ |
| Priority Support | ❌ | ❌ | ✅ |

## 🚀 Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kszongic/ai-saas-starter)

## 📄 License

This is a commercial template. You get a license to use it in unlimited personal and commercial projects.

**[Get it on Gumroad for $49 →](https://kszongic.gumroad.com/l/ai-saas-starter)**

---

Built by [kszongic](https://github.com/kszongic) • Questions? [Open an issue](https://github.com/kszongic/ai-saas-starter/issues)
