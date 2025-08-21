import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import EnhancedFooter from "@/components/enhanced-footer"
import { getDictionary } from "@/lib/dictionaries"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kisaan Saathi - Direct Farm to Table Connection",
  description: "Empowering farmers and connecting communities. Kisaan Saathi is a multilingual, AI-powered e-commerce platform that directly connects Indian farmers with consumers—eliminating middlemen, increasing trust, and ensuring fair prices for both parties.",
  keywords: "farmers, agriculture, direct selling, farm to table, India, organic produce, fair prices",
  authors: [{ name: "Kisaan Saathi Team" }],
  openGraph: {
    title: "Kisaan Saathi - Direct Farm to Table Connection",
    description: "Connect farmers directly with consumers for better prices and fresher produce",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisaan Saathi - Direct Farm to Table Connection",
    description: "Connect farmers directly with consumers for better prices and fresher produce",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "hi" }, { lang: "mr" }, { lang: "ta" }]
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header lang={params.lang} dictionary={dict.header} />
            <main className="flex-1">{children}</main>
            <EnhancedFooter dictionary={dict.footer} lang={params.lang} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

