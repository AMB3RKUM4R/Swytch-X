import type { Metadata, Viewport } from "next"

// Styles and fonts are essential for the UI, so we keep them.
import "@/styles/globals.css"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

// Local configuration and utilities for UI are also kept.
import { siteConfig } from "@/config/site"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/providers"
import { TailwindIndicator } from "@/components/tailwind-indicator"

// The 'env' import has been removed to decouple the layout from environment variables.
// The 'Analytics' component has also been removed.

export const metadata: Metadata = {
  // The metadataBase is now hardcoded.
  // You can change "http://localhost:3000" to your actual domain when you deploy.
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "nextjs",
    "react",
    "react server components",
    "skateshop",
    "skateboarding",
    "kickflip",
  ],
  authors: [
    {
      name: "sadmann7",
      url: "https://www.sadmn.com",
    },
  ],
  creator: "sadmann7",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: "@sadmann17",
  },
  icons: {
    icon: "/icon.png",
  },
  // The `absoluteUrl` helper has been removed for a simpler relative path.
  manifest: "/site.webmanifest",
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <TailwindIndicator />
          {/* The Analytics component has been removed from here */}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
