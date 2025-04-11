import Link from "next/link"
import {
  ArrowUpRightIcon,
  CircleChevronDownIcon,
  ScanEyeIcon,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SiteMeta } from "@/data/site-data"

function provideLinksNav() {
  return SiteMeta.filter((i) => i.pos !== undefined)
    .sort((a, b) => a.pos! - b.pos!)
    .slice(0, 6)
}

export function NavDesk({ currentPath }: { currentPath: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {provideLinksNav().map((i) => (
          <NavigationMenuItem key={i.pos}>
            <NavigationMenuLink
              data-active={currentPath === i.href}
              className={navigationMenuTriggerStyle({
                className: i.external ? "flex flex-row" : undefined,
              })}
              href={i.href}
              {...(i.external && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              {i.title}
              {i.external && <ArrowUpRightIcon />}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export function NavMob({ currentPath }: { currentPath: string }) {
  return <>Mob Nav</>
}

export function NavOpt() {
  return (
    <Popover>
      <PopoverTrigger
        className={buttonVariants({ variant: "outline", size: "icon" })}
        aria-label="More Options"
        title="More Options"
      >
        <CircleChevronDownIcon />
      </PopoverTrigger>
      <PopoverContent className="w-fit space-x-2 p-2">
        <Link
          href="/admin"
          className={buttonVariants({ variant: "ghost", size: "icon" })}
          title="Admin"
          aria-label="Admin"
          prefetch={false}
        >
          <ScanEyeIcon />
        </Link>
      </PopoverContent>
    </Popover>
  )
}
