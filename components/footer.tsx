import Link from "next/link"
import Image from "next/image"

export default function Footer({ dictionary }: { dictionary: any }) {
  return (
    <footer className="border-t bg-wheat/30">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <Image src="/images/logo.png" alt="Kisaan Saathi Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-bold text-navy-900">Kisaan Saathi</span>
            </Link>
            <p className="text-sm text-dark-green">{dictionary.tagline}</p>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-navy-900">{dictionary.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.farmers}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.consumers}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-navy-900">{dictionary.support}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.helpCenter}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.reportIssue}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.faq}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-3 text-navy-900">{dictionary.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.terms}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-dark-green hover:text-dark-green/80">
                  {dictionary.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-dark-green">
          <p>
            &copy; {new Date().getFullYear()} Kisaan Saathi. {dictionary.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

