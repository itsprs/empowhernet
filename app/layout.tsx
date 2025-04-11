import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import { fontPrimary, fontSecondary } from "@/lib/fonts"
import { ThemeProvider } from "@/lib/provider/theme-provider"
import { cn } from "@/lib/utils"
import { site } from "@/data/site"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [
    {
      name: site.developer.name,
      url: site.developer.url,
    },
  ],
  creator: site.developer.name,
  publisher: site.developer.name,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-primary flex min-h-screen flex-col items-center antialiased",
          fontPrimary.variable,
          fontSecondary.variable
        )}
      >
        <NextTopLoader color="#009688" showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
