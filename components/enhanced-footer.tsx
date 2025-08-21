import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function EnhancedFooter({ dictionary, lang }: { dictionary: any, lang: string }) {
  return (
    <footer className="border-t bg-gradient-to-br from-wheat/20 to-light-green/20">
      <div className="container py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-saffron/10 to-flag-green/10 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-navy-blue mb-4">Stay Updated with Kisaan Saathi</h3>
          <p className="text-navy-blue/70 mb-6 max-w-2xl mx-auto">
            Get the latest updates on new features, farmer success stories, and agricultural insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="flex-1 focus:border-flag-green"
            />
            <Button className="btn-primary">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center gap-2 mb-6">
              <Image 
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop" 
                alt="Kisaan Saathi Logo" 
                width={50} 
                height={50} 
                className="h-12 w-12 rounded-full border-2 border-flag-green" 
              />
              <span className="text-2xl font-bold text-navy-blue">Kisaan Saathi</span>
            </Link>
            <p className="text-sm text-navy-blue/70 leading-relaxed mb-6">{dictionary.tagline}</p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-600" },
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-600" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-700" }
              ].map((social, index) => (
                <Link 
                  key={index}
                  href={social.href} 
                  className={`text-navy-blue/60 ${social.color} transition-colors duration-300 hover:scale-110 transform`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-6 text-navy-blue text-lg">{dictionary.quickLinks}</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: dictionary.about, href: `/${lang}/about` },
                { label: dictionary.farmers, href: `/${lang}/farmers` },
                { label: dictionary.consumers, href: `/${lang}/consumers` },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-6 text-navy-blue text-lg">{dictionary.support}</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: dictionary.helpCenter, href: `/${lang}/support` },
                { label: dictionary.reportIssue, href: `/${lang}/support` },
                { label: dictionary.faq, href: `/${lang}/support` },
                { label: "Live Chat", href: "#" },
                { label: "Community Forum", href: "#" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-6 text-navy-blue text-lg">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-flag-green flex-shrink-0" />
                <div>
                  <div className="font-medium text-navy-blue">Email</div>
                  <a href="mailto:support@kisaansaathi.com" className="text-navy-blue/70 hover:text-flag-green transition-colors">
                    support@kisaansaathi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-flag-green flex-shrink-0" />
                <div>
                  <div className="font-medium text-navy-blue">Phone</div>
                  <a href="tel:+911234567890" className="text-navy-blue/70 hover:text-flag-green transition-colors">
                    +91 1234567890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-flag-green flex-shrink-0" />
                <div>
                  <div className="font-medium text-navy-blue">Address</div>
                  <div className="text-navy-blue/70">
                    Bhopal, Madhya Pradesh<br />
                    India 462001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-navy-blue/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-navy-blue/70">
              &copy; {new Date().getFullYear()} Kisaan Saathi. {dictionary.rights}
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { label: dictionary.terms, href: "#" },
                { label: dictionary.privacy, href: "#" },
                { label: dictionary.cookies, href: "#" },
                { label: "Refund Policy", href: "#" }
              ].map((link, index) => (
                <Link 
                  key={index}
                  href={link.href} 
                  className="text-navy-blue/70 hover:text-flag-green transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Made in India Badge */}
        <div className="text-center mt-8 pt-8 border-t border-navy-blue/20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-saffron/20 via-flag-white/20 to-flag-green/20 rounded-full">
            <span className="text-sm font-medium text-navy-blue">Made with ❤️ in India</span>
            <span className="text-lg">🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  )
}