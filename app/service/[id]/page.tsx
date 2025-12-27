import Link from "next/link"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/lib/services-data"
import { Baby, Users, HeartPulse, CheckCircle, Clock, DollarSign } from "lucide-react"

const iconMap = {
  baby: Baby,
  users: Users,
  "heart-pulse": HeartPulse,
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const service = services[id]

  if (!service) {
    notFound()
  }

  const IconComponent = iconMap[service.icon as keyof typeof iconMap]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <IconComponent className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{service.name}</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">{service.shortDescription}</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About This Service</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">What's Included</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Pricing</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Hourly Rate</span>
                          </div>
                          <span className="text-lg font-bold text-primary">৳{service.hourlyRate}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">Daily Rate</span>
                          </div>
                          <span className="text-lg font-bold text-primary">৳{service.dailyRate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Link href={`/booking/${service.id}`}>
                        <Button size="lg" className="w-full">
                          Book Now
                        </Button>
                      </Link>
                      <p className="text-xs text-muted-foreground text-center mt-3">
                        No payment required to book. Pay after service confirmation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
