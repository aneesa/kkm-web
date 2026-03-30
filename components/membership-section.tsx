import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Individual",
    price: "RM 100",
    period: "per year",
    description: "Perfect for cat enthusiasts who want to support our mission.",
    features: [
      "Access to member events",
      "Monthly newsletter",
      "Show entry discounts",
      "Online resources access",
    ],
    popular: false,
  },
  {
    name: "Breeder",
    price: "RM 250",
    period: "per year",
    description: "For registered breeders looking to showcase their cats.",
    features: [
      "All Individual benefits",
      "Pedigree registration services",
      "Breeder directory listing",
      "Priority show entries",
      "Breeding consultation",
    ],
    popular: true,
  },
  {
    name: "Cattery",
    price: "RM 500",
    period: "per year",
    description: "Comprehensive package for professional catteries.",
    features: [
      "All Breeder benefits",
      "Cattery certification",
      "International show support",
      "Marketing exposure",
      "Unlimited pedigree registrations",
      "Dedicated account manager",
    ],
    popular: false,
  },
]

export function MembershipSection() {
  return (
    <section id="membership" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-medium tracking-wider uppercase mb-4">
            Membership
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Join our community
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Become a member of Malaysia Cat Club and join a passionate community 
            of cat lovers, breeders, and enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "border-accent bg-accent/5"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-serif text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-sm">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full ${
                  plan.popular ? "" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                variant={plan.popular ? "default" : "secondary"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
