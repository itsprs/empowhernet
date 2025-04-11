"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowUpRightIcon,
  CircleChevronDownIcon,
  LayoutDashboardIcon,
  MenuIcon,
  ScanEyeIcon,
  XIcon,
} from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
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
  const [open, setOpen] = useState(false)

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size="icon" variant="outline" aria-label="Open Menu">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle className="text-lg font-semibold">Menu</DrawerTitle>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <XIcon className="h-5 w-5" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <nav className="mt-4 space-y-3">
          {provideLinksNav().map((i) => (
            <DrawerClose asChild key={i.href}>
              <Link
                href={i.href}
                className={`hover:bg-muted block rounded-md px-4 py-2 text-sm font-medium ${
                  currentPath === i.href ? "bg-muted text-primary" : ""
                }`}
                {...(i.external && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                <span className="inline-flex items-center gap-1">
                  {i.title}
                  {i.external && <ArrowUpRightIcon className="h-4 w-4" />}
                </span>
              </Link>
            </DrawerClose>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  )
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
