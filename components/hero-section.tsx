import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-cat.jpg"
          alt="Majestic cat"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="max-w-2xl">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">
            Est. 1985
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance">
            Celebrating feline excellence in Malaysia
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Malaysia Cat Club is the premier organization dedicated to promoting 
            responsible cat breeding, organizing prestigious cat shows, and 
            fostering a community of passionate cat lovers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full gap-2">
              Become a Member
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Upcoming Events
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-foreground/40 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
