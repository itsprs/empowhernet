import Link from "next/link"
import { SearchIcon, ShieldUserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/shared/header"
import { ThemeToggle } from "@/components/theme-toggle"
import { SiteIcon } from "@/lib/icons"

export function SiteHeader() {
  return (
    <Header container>
      <Button
        aria-label="Home"
        size="icon"
        variant="ghost"
        className="rounded-full"
        asChild
      >
        <Link href="/">
          <SiteIcon className="size-8 fill-current" />
        </Link>
      </Button>
      <div className="flex items-center gap-2">
        <Button aria-label="Search" size="icon" variant="outline" asChild>
          <Link href="/search">
            <SearchIcon />
          </Link>
        </Button>
        <span className="mx-1 h-4 border-l" />
        <Button aria-label="Admin" variant="outline" asChild>
          <Link href="/admin" prefetch={false}>
            <ShieldUserIcon /> Admin
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </Header>
  )
}
