import { Onest } from "next/font/google"
import localFont from "next/font/local"

export const fontPrimary = Onest({
  variable: "--font-primary",
  subsets: ["latin"],
})

export const fontSecondary = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-secondary",
  preload: false,
})
