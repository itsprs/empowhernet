import { SiteFooter } from "@/components/function/site/footer"
import { SiteHeader } from "@/components/function/site/header"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <SiteHeader />
      <main className="relative container flex min-h-[94vh] grow flex-col items-center gap-28 border-x border-dashed py-28">
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
