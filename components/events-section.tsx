import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, ArrowRight } from "lucide-react"

const events = [
  {
    title: "MCC Championship Show 2026",
    date: "April 15-16, 2026",
    location: "Kuala Lumpur Convention Centre",
    image: "/images/cat-show.jpg",
    description: "Our premier annual championship featuring the finest cats from across Southeast Asia.",
    featured: true,
  },
  {
    title: "Breed Seminar: British Shorthair",
    date: "May 8, 2026",
    location: "MCC Headquarters, Kuala Lumpur",
    image: "/images/british-shorthair.jpg",
    description: "Learn about the breed standard, grooming tips, and showing techniques.",
    featured: false,
  },
  {
    title: "Kitten Showcase & Adoption Day",
    date: "June 22, 2026",
    location: "Mid Valley Megamall",
    image: "/images/siamese-cat.jpg",
    description: "Meet adorable kittens from registered breeders and rescue organizations.",
    featured: false,
  },
]

export function EventsSection() {
  return (
    <section id="events" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Events
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
              Upcoming shows & activities
            </h2>
          </div>
          <Button variant="outline" className="rounded-full gap-2 w-fit">
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Featured Event */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl group">
            <div className="aspect-[21/9] relative">
              <Image
                src={events[0].image}
                alt={events[0].title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-primary-foreground">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full mb-4">
                Featured Event
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold mb-2">
                {events[0].title}
              </h3>
              <p className="text-primary-foreground/80 mb-4 max-w-xl">
                {events[0].description}
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {events[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {events[0].location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Events */}
        <div className="grid md:grid-cols-2 gap-6">
          {events.slice(1).map((event) => (
            <div
              key={event.title}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
                <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
