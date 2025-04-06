import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getDictionary } from "@/lib/dictionaries"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kisaan Saathi",
  description: "Connect farmers directly with consumers",
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
            <Footer dictionary={dict.footer} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

