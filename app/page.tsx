import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/events-section"
import { BreedsSection } from "@/components/breeds-section"
import { MembershipSection } from "@/components/membership-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <BreedsSection />
      <MembershipSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
