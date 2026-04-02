import { cn } from "@/lib/utils"

type HeaderProps = {
  title?: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className }: HeaderProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <p className="text-2xl font-extrabold sm:text-3xl lg:text-5xl dark:bg-gradient-to-b dark:from-white dark:to-zinc-500 dark:bg-clip-text dark:text-transparent">
        {title}
      </p>
      <p className="mt-3 text-sm text-foreground sm:text-base lg:text-lg">
        {description}
      </p>
    </div>
  )
}
