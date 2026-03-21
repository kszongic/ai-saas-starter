"use client";

import { BarChart3, MessageSquare, CreditCard, Users, TrendingUp, Clock } from "lucide-react";

const stats = [
  { label: "Total Messages", value: "12,847", change: "+23%", icon: MessageSquare },
  { label: "Active Users", value: "342", change: "+12%", icon: Users },
  { label: "MRR", value: "$4,280", change: "+18%", icon: CreditCard },
  { label: "Avg Response", value: "1.2s", change: "-8%", icon: Clock },
];

const recentActivity = [
  { user: "sarah@example.com", action: "Upgraded to Pro", time: "2 min ago" },
  { user: "mike@company.io", action: "Reached daily limit", time: "15 min ago" },
  { user: "team@startup.com", action: "New Enterprise signup", time: "1 hour ago" },
  { user: "dev@indie.co", action: "API key generated", time: "3 hours ago" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted">Overview of your AI SaaS metrics</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-sm text-muted">
            <TrendingUp className="h-4 w-4" /> Last 30 days
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">{s.label}</span>
                <s.icon className="h-4 w-4 text-muted" />
              </div>
              <div className="mt-2 text-2xl font-bold">{s.value}</div>
              <div className="mt-1 text-xs text-green-400">{s.change} from last month</div>
            </div>
          ))}
        </div>

        {/* Usage Chart Placeholder */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="col-span-2 rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold">Usage Over Time</h3>
            <div className="mt-4 flex h-48 items-center justify-center text-muted">
              <BarChart3 className="mr-2 h-5 w-5" />
              Chart component — integrate Recharts or Chart.js
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold">Recent Activity</h3>
            <div className="mt-4 space-y-4">
              {recentActivity.map((a, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-sm font-medium">{a.action}</span>
                  <div className="flex items-center justify-between text-xs text-muted">
                    <span>{a.user}</span>
                    <span>{a.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
