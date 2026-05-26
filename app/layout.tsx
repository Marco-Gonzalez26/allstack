import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ThemeProvider } from "next-themes"

import { cn } from "@/lib/utils"
import Navbar from "@/components/navigation/navbar"
import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth"

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
})

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 700",
})

export const metadata: Metadata = {
  title: "AllOverflow",
  description:
    "A community-driven platform for asking and answering questions about all topics. Get help, share knowledge, and collaborate with other people around the world.",
  icons: {
    icon: "/images/site-logo.svg",
    shortcut: "/images/site-logo.svg",
    apple: "/images/site-logo.svg",
  },
}

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const session = await auth()
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", inter.className, spaceGrotesk.variable, "font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <SessionProvider session={session}>
        <body className="flex min-h-full flex-col">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Navbar />
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  )
}

export default RootLayout
