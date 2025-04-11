import { cn } from "@/lib/utils"

export function Section({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <section
      className={cn(
        "container border-x border-b border-dashed py-10",
        className
      )}
    >
      {children}
    </section>
  )
}
