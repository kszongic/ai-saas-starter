# AI SaaS Starter — $49

> Ship your AI SaaS in days, not months. Production-ready Next.js 15 template with auth, billing, multi-model chat, and admin dashboard.

## What's Included

### 🤖 Multi-Model AI Chat
- Streaming chat with **GPT-4o, Claude Sonnet, Gemini Flash**
- Model switching per conversation
- Beautiful dark-mode UI with message history
- Vercel AI SDK integration

### 💳 Stripe Billing (Complete)
- **Free / Pro ($19/mo) / Enterprise ($99/mo)** tiers
- Checkout sessions, customer portal, usage limits
- Webhook handlers for all subscription lifecycle events
- Daily message limits enforced per plan

### 🔐 Authentication & Authorization
- **Next-Auth v5** with GitHub + Google providers
- Role-based access control (user / admin)
- Protected routes via middleware
- Database sessions with Drizzle adapter

### 📊 Admin Dashboard
- Revenue metrics (MRR, active users, messages)
- Usage trends chart integration point
- Recent activity feed
- User management ready

### 🗄️ Database
- **Drizzle ORM** + PostgreSQL
- Complete schema: users, accounts, sessions, subscriptions, messages, usage tracking
- Migration-ready with `drizzle-kit`

### 🎨 UI & DX
- **Next.js 15** App Router + React 19
- **Tailwind CSS 4** with custom dark theme
- TypeScript strict mode
- Landing page, pricing page, chat UI, dashboard
- Toast notifications, loading states
- Mobile responsive

## Quick Start

```bash
git clone https://github.com/kszongic/ai-saas-starter
cd ai-saas-starter
cp .env.example .env.local
npm install
npm run db:push
npm run dev
```

## File Structure

```
app/
├── page.tsx              # Landing page with hero + features
├── layout.tsx            # Root layout with providers
├── globals.css           # Tailwind + theme
├── chat/page.tsx         # Multi-model AI chat UI
├── pricing/page.tsx      # 3-tier pricing page
├── dashboard/page.tsx    # Admin dashboard with metrics
├── api/
│   ├── ai/chat/route.ts  # Streaming AI chat endpoint
│   └── webhooks/stripe/route.ts  # Stripe webhook handler
lib/
├── ai.ts                 # AI provider config
├── auth.ts               # Next-Auth v5 setup
├── stripe.ts             # Stripe client + helpers
├── db/
│   ├── index.ts          # Drizzle client
│   └── schema.ts         # Full database schema
middleware.ts             # Auth + RBAC middleware
tailwind.config.ts        # Theme configuration
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 |
| Auth | Next-Auth v5 |
| Database | PostgreSQL + Drizzle ORM |
| AI | Vercel AI SDK (OpenAI, Anthropic, Google) |
| Payments | Stripe (Checkout, Webhooks, Portal) |
| Deploy | Vercel / any Node.js host |

## License

Commercial license — use in unlimited projects after purchase.

---

**[Get it on Gumroad for $49 →](https://kszongic.gumroad.com/l/ai-saas-starter)**
