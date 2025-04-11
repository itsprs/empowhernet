import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AdminHeader } from "./header"
import { SideBar } from "./sidebar"
import { NavUser } from "./sidebar/user-nav"

export default function Admin({
  name,
  email,
  avatar,
  children,
}: {
  name: string
  email: string
  avatar: string
  children: React.ReactNode
}) {
  return (
    <SidebarProvider className="w-full">
      <SideBar>
        <NavUser name={name} email={email} avatar={avatar} />
      </SideBar>
      <SidebarInset className="relative">
        <AdminHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}
