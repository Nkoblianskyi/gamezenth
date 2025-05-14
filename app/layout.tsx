import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Gamezenth - Blog de Juegos y Noticias",
    template: "%s | Gamezenth",
  },
  description: "Tu fuente de información sobre videojuegos, noticias, análisis y guías en español",
  keywords: ["videojuegos", "gaming", "blog de juegos", "noticias de videojuegos", "análisis de juegos"],
  authors: [{ name: "Gamezenth Team" }],
  creator: "Gamezenth",
  publisher: "Gamezenth",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gamezenth.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Gamezenth - Blog de Juegos y Noticias",
    description: "Tu fuente de información sobre videojuegos, noticias, análisis y guías en español",
    url: "https://gamezenth.com",
    siteName: "Gamezenth",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
