"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, Globe } from "lucide-react"

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
  { code: "mr", name: "मराठी" },
  { code: "ta", name: "தமிழ்" },
]

export default function Header({ lang, dictionary }: { lang: string; dictionary: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href={`/${lang}`} className="flex items-center gap-2">
            <Image src="/images/logo.png" alt="Kisaan Saathi Logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-navy-900">Kisaan Saathi</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href={`/${lang}`} className="text-sm font-medium text-navy-900 hover:text-dark-green">
            {dictionary.home}
          </Link>
          <Link href={`/${lang}/farmers`} className="text-sm font-medium text-navy-900 hover:text-dark-green">
            {dictionary.farmers}
          </Link>
          <Link href={`/${lang}/consumers`} className="text-sm font-medium text-navy-900 hover:text-dark-green">
            {dictionary.consumers}
          </Link>
          <Link href={`/${lang}/support`} className="text-sm font-medium text-navy-900 hover:text-dark-green">
            {dictionary.support}
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="flex items-center gap-1 text-dark-green">
                <Globe className="h-4 w-4" />
                <span>{languages.find((l) => l.code === lang)?.name || "English"}</span>
                <span className="sr-only">Switch language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((language) => (
                <DropdownMenuItem key={language.code} asChild>
                  <Link
                    href={`/${language.code}${window.location.pathname.substring(3)}`}
                    className={lang === language.code ? "font-bold" : ""}
                  >
                    {language.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild className="bg-dark-green hover:bg-dark-green/90">
            <Link href={`/${lang}/login`}>{dictionary.login}</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="flex items-center gap-1 text-dark-green">
                <Globe className="h-4 w-4" />
                <span className="sr-only">Switch language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((language) => (
                <DropdownMenuItem key={language.code} asChild>
                  <Link
                    href={`/${language.code}${window.location.pathname.substring(3)}`}
                    className={lang === language.code ? "font-bold" : ""}
                  >
                    {language.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container md:hidden py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              href={`/${lang}`}
              className="text-sm font-medium text-navy-900 hover:text-dark-green"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.home}
            </Link>
            <Link
              href={`/${lang}/farmers`}
              className="text-sm font-medium text-navy-900 hover:text-dark-green"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.farmers}
            </Link>
            <Link
              href={`/${lang}/consumers`}
              className="text-sm font-medium text-navy-900 hover:text-dark-green"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.consumers}
            </Link>
            <Link
              href={`/${lang}/support`}
              className="text-sm font-medium text-navy-900 hover:text-dark-green"
              onClick={() => setIsMenuOpen(false)}
            >
              {dictionary.support}
            </Link>
            <Button asChild className="w-full bg-dark-green hover:bg-dark-green/90">
              <Link href={`/${lang}/login`} onClick={() => setIsMenuOpen(false)}>
                {dictionary.login}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

