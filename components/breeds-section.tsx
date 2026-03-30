"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

const breeds = [
  {
    name: "Persian",
    origin: "Iran (Persia)",
    description: "Known for their long, luxurious coat and sweet, gentle personality.",
    image: "/images/hero-cat.jpg",
  },
  {
    name: "British Shorthair",
    origin: "United Kingdom",
    description: "Characterized by their dense, plush coat and calm, easy-going temperament.",
    image: "/images/british-shorthair.jpg",
  },
  {
    name: "Siamese",
    origin: "Thailand",
    description: "Distinguished by their striking blue eyes and vocal, affectionate nature.",
    image: "/images/siamese-cat.jpg",
  },
  {
    name: "Maine Coon",
    origin: "United States",
    description: "One of the largest domesticated breeds, known for their friendly demeanor.",
    image: "/images/maine-coon.jpg",
  },
]

export function BreedsSection() {
  const [activeBreed, setActiveBreed] = useState(0)

  return (
    <section id="breeds" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">
            Cat Breeds
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Discover recognized breeds
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Malaysia Cat Club recognizes numerous cat breeds, each with unique 
            characteristics and standards. Explore some of the most popular breeds 
            showcased at our events.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Display */}
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src={breeds[activeBreed].image}
              alt={breeds[activeBreed].name}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
              <p className="text-primary-foreground font-serif text-3xl font-bold">
                {breeds[activeBreed].name}
              </p>
              <p className="text-primary-foreground/70 text-sm">
                Origin: {breeds[activeBreed].origin}
              </p>
            </div>
          </div>

          {/* Breed List */}
          <div className="space-y-2">
            {breeds.map((breed, index) => (
              <button
                key={breed.name}
                onClick={() => setActiveBreed(index)}
                className={`w-full text-left p-6 rounded-xl border transition-all duration-300 ${
                  activeBreed === index
                    ? "border-accent bg-accent/5"
                    : "border-border hover:border-accent/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-1">{breed.name}</h3>
                    <p className="text-sm text-muted-foreground">{breed.description}</p>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-accent transition-transform ${
                      activeBreed === index ? "rotate-90" : ""
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
