"use client"

import { usePathname } from "next/navigation"
import { ScanEyeIcon } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Header } from "@/components/shared/header"
import { ThemeToggle } from "@/components/theme-toggle"

export function AdminHeader() {
  const current_p = usePathname()

  return (
    <Header>
      <div className="flex items-center gap-2">
        <SidebarTrigger
          variant="outline"
          className="size-9"
          title="Toggle Sidebar"
          aria-label="Toggle Sidebar"
        />
        <span className="mx-1 h-4 border-l" />
        <Breadcrumb>
          <BreadcrumbList className="text-foreground h-9 rounded-md border border-dashed px-3">
            <BreadcrumbItem>
              <ScanEyeIcon size={16} aria-hidden="true" />
              <span className="sr-only">Admin</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="uppercase">
              {current_p.split("/")[2] || "Dashboard"}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ThemeToggle />
    </Header>
  )
}
