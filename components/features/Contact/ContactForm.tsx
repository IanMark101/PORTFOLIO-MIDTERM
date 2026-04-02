"use client"

import React from "react"
import { Send } from "lucide-react"

export function ContactForm() {
  return (
    <div className="w-full max-w-md rounded-[40px] border border-border bg-card p-8 shadow-2xl md:p-12">
      <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-3 text-left">
          <label className="block text-xs font-bold tracking-widest text-muted-foreground uppercase">
            Your Full Name
          </label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-input bg-background px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/50 focus:outline-none"
          />
        </div>

        <div className="space-y-3 text-left">
          <label className="block text-xs font-bold tracking-widest text-muted-foreground uppercase">
            Your Message
          </label>
          <textarea
            rows={5}
            placeholder="How can we collaborate?"
            className="w-full resize-none rounded-xl border border-input bg-background px-5 py-4 text-foreground transition-all placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/50 focus:outline-none"
          />
        </div>

        <button className="group animate-glow-pulse flex w-full items-center justify-center gap-3 rounded-2xl bg-[#2563eb] px-8 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-[#1d4ed8] active:scale-[0.98]">
          SEND INQUIRY
          <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </div>
  )
}
