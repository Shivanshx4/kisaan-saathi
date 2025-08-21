import Link from "next/link"
import Image from "next/image"

export default function Footer({ dictionary }: { dictionary: any }) {
  return (
    <footer className="border-t bg-gradient-to-br from-wheat/20 to-light-green/20">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="#" className="flex items-center gap-2 mb-4">
              <Image 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" 
                alt="Kisaan Saathi Logo" 
                width={40} 
                height={40} 
                className="h-10 w-10 rounded-full border-2 border-flag-green" 
              />
              <span className="text-xl font-bold text-navy-blue">Kisaan Saathi</span>
            </Link>
            <p className="text-sm text-navy-blue/70 leading-relaxed">{dictionary.tagline}</p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-navy-blue text-lg">{dictionary.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.about}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.farmers}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.consumers}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.blog}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-navy-blue text-lg">{dictionary.support}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.helpCenter}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.reportIssue}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.faq}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-navy-blue text-lg">{dictionary.legal}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.terms}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.privacy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300">
                  {dictionary.cookies}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-blue/20 text-center text-sm text-navy-blue/70">
          <p>
            &copy; {new Date().getFullYear()} Kisaan Saathi. {dictionary.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

