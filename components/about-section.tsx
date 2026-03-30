import { Award, Heart, Users, Calendar } from "lucide-react"

const stats = [
  { icon: Calendar, value: "40+", label: "Years of Excellence" },
  { icon: Users, value: "2,500+", label: "Active Members" },
  { icon: Award, value: "150+", label: "Shows Organized" },
  { icon: Heart, value: "10,000+", label: "Cats Registered" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">
              Dedicated to the love and welfare of cats
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Malaysia Cat Club, or Kelab Kucing Malaysia, has been at the forefront 
              of feline advocacy in Malaysia since 1985. As a non-profit organization, 
              we are committed to promoting responsible cat ownership, ethical breeding 
              practices, and the overall welfare of cats across the nation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our club hosts prestigious cat shows that bring together breeders, 
              exhibitors, and cat enthusiasts from across the region. We maintain 
              comprehensive pedigree records and work tirelessly to educate the 
              public about proper cat care and the unique characteristics of various 
              cat breeds.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-4">
                  <div className="p-2 bg-secondary rounded-lg">
                    <stat.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Text */}
          <div className="relative overflow-hidden">
            <div className="text-[7rem] md:text-[16rem] font-serif font-bold text-border/50 leading-none select-none">
              MCC
            </div>
            <p className="relative md:absolute bottom-0 right-0 text-right text-muted-foreground max-w-sm leading-relaxed">
              A proud member of the international cat fancy community, 
              recognized for excellence in show standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
