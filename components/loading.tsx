import { LoaderCircleIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface LoadingUIProps {
  className?: string
  color?: string
  size?: number
}

export function LoadingUI({
  className,
  color,
  size,
  ...props
}: LoadingUIProps) {
  return (
    <LoaderCircleIcon
      role="status"
      aria-label="loading"
      className={cn(
        "m-auto mx-2.5 shrink-0 animate-spin duration-200",
        className
      )}
      color={color || "currentColor"}
      size={size || 16}
      {...props}
    />
  )
}
