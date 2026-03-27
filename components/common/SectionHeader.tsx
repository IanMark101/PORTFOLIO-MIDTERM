import { cn } from "@/lib/utils"

type HeaderProps = {
  title: string
  description: string
  className?: string
}

export function SectionHeader({ title, description, className }: HeaderProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <p className="text-2xl font-extrabold text-foreground sm:text-3xl lg:text-5xl">
        {title}
      </p>
      <p className="mt-3 text-sm text-foreground sm:text-base lg:text-lg">
        {description}
      </p>
    </div>
  )
}
