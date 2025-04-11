import { cn } from "@/lib/utils"

interface BlobProps {
  src?: string
  borderOpacity?: number
  borderWidth?: number
  className?: string
  children?: React.ReactNode
}

export function Blob({
  src,
  borderOpacity,
  borderWidth,
  className,
  children,
  ...props
}: BlobProps) {
  return (
    <div
      className={cn(
        "animate-blob h-72 w-full max-w-72 overflow-hidden",
        className
      )}
      style={{
        backgroundImage: src ? `url(${src})` : "none",
        backgroundColor: "#80808025",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        boxShadow: `inset 0 0 0 ${borderWidth || 9}px rgba(255, 255, 255, ${
          borderOpacity || 0.2
        })`,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
