"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function SearchBar({ className, ...props }: { className?: string }) {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim()
    if (event.key === "Enter" && value !== "") {
      const params = new URLSearchParams(searchParams)
      params.set("search", value)
      replace(`${pathname}?${params}`)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      const params = new URLSearchParams(searchParams)
      params.delete("search")
      replace(`${pathname}?${params}`)
    }
  }

  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <Search
        className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2"
        size={18}
      />
      <Input
        name="search"
        type="search"
        placeholder="Search..."
        className="w-full pl-10"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        defaultValue={searchParams.get("search") || ""}
        {...props}
      />
    </div>
  )
}
