"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Settings2, Loader2 } from "lucide-react";

const models = [
  { id: "gpt-4o", name: "GPT-4o", provider: "OpenAI" },
  { id: "claude-sonnet-4-20250514", name: "Claude Sonnet", provider: "Anthropic" },
  { id: "gemini-2.0-flash", name: "Gemini Flash", provider: "Google" },
];

export default function ChatPage() {
  const [model, setModel] = useState(models[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    body: { model },
  });

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex h-screen flex-col bg-background">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-border px-6 py-3">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <h1 className="font-semibold">AI Chat</h1>
        </div>
        <div className="flex items-center gap-2">
          <Settings2 className="h-4 w-4 text-muted" />
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-sm"
          >
            {models.map((m) => (
              <option key={m.id} value={m.id}>
                {m.name} ({m.provider})
              </option>
            ))}
          </select>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="mx-auto max-w-3xl space-y-6">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-muted">
              <Bot className="h-12 w-12 mb-4" />
              <p className="text-lg">Start a conversation</p>
              <p className="text-sm">Choose a model and ask anything</p>
            </div>
          )}
          {messages.map((m) => (
            <div key={m.id} className={`flex gap-3 ${m.role === "assistant" ? "" : "flex-row-reverse"}`}>
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                m.role === "assistant" ? "bg-primary/20 text-primary" : "bg-card text-muted"
              }`}>
                {m.role === "assistant" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <div className={`rounded-2xl px-4 py-2.5 max-w-[80%] ${
                m.role === "assistant" ? "bg-card border border-border" : "bg-primary text-primary-foreground"
              }`}>
                <p className="text-sm whitespace-pre-wrap">{m.content}</p>
              </div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-border px-6 py-4">
        <form onSubmit={handleSubmit} className="mx-auto flex max-w-3xl items-center gap-3">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Send a message..."
            className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </button>
        </form>
      </div>
    </div>
  );
}
