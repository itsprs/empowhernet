"use client"

import dynamic from "next/dynamic"

const DYN_Admin = {
  Dashboard: dynamic(() => import("@/components/function/admin")),
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <DYN_Admin.Dashboard
      name="Admin Name"
      email="admin@example.com"
      avatar="/placeholder.svg"
    >
      <main className="flex grow flex-col gap-4 p-4">{children}</main>
    </DYN_Admin.Dashboard>
  )
}
