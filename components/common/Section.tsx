import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-2 items-center py-2 md:mx-10 md:py-14 lg:mx-20 lg:py-10",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
