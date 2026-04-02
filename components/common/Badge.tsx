import React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  text: string
  className?: string
}

export function BadgeHeading({ text, className }: BadgeProps) {
  return (
    <div className={cn("mb-4 flex items-center gap-2", className)}>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
      </span>
      <p className="text-xs font-bold tracking-wider text-foreground uppercase dark:text-gray-300">
        {text}
      </p>
    </div>
  )
}
