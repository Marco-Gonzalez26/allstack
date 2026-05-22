import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
