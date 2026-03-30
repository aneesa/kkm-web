import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

const footerLinks = {
  club: [
    { name: "About Us", href: "#about" },
    { name: "Our History", href: "#" },
    { name: "Committee", href: "#" },
    { name: "Membership", href: "#membership" },
  ],
  resources: [
    { name: "Cat Breeds", href: "#breeds" },
    { name: "Show Results", href: "#" },
    { name: "Pedigree Search", href: "#" },
    { name: "Forms & Documents", href: "#" },
  ],
  events: [
    { name: "Upcoming Shows", href: "#events" },
    { name: "Past Events", href: "#" },
    { name: "Calendar", href: "#" },
    { name: "Register for Show", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold">MCC</span>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-sm">
              Malaysia Cat Club is a non-profit organization dedicated to 
              promoting cat welfare, responsible breeding, and the joy of 
              cat companionship across Malaysia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium mb-4">The Club</h3>
            <ul className="space-y-3">
              {footerLinks.club.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">Events</h3>
            <ul className="space-y-3">
              {footerLinks.events.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Malaysia Cat Club. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
