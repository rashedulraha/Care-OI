// import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Baby,
  Users,
  HeartPulse,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-linear-to-b from-primary/5 to-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Find Trusted Caretakers for Your Loved Ones
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
                Professional caregiving services connecting families with
                experienced, compassionate caretakers. From baby care to elderly
                assistance, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="#services">
                  <Button size="lg" className="text-base">
                    Find a Caretaker
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-base bg-transparent">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive caregiving solutions tailored to your family's
                unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Baby Care Service */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Baby className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Baby Care</CardTitle>
                  <CardDescription>
                    Expert care for infants and toddlers with experienced
                    nannies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Newborn to 5 years old</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Certified and trained professionals</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Flexible hourly or daily rates</span>
                    </li>
                  </ul>
                  <Link href="/service/baby-care">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Elderly Care Service */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Elderly Care</CardTitle>
                  <CardDescription>
                    Compassionate support for seniors with dignity and respect
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Daily living assistance</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Companionship and engagement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Medication reminders</span>
                    </li>
                  </ul>
                  <Link href="/service/elderly-care">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Sick People Service */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <HeartPulse className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Sick People Service</CardTitle>
                  <CardDescription>
                    Professional medical care assistance for patients at home
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Post-surgery recovery support</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Chronic illness management</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>24/7 care options available</span>
                    </li>
                  </ul>
                  <Link href="/service/sick-care">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Why Choose Care.xyz?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We understand that finding the right caretaker is crucial for
                  your family's wellbeing. That's why we've built a platform
                  that connects you with verified, experienced professionals who
                  share your commitment to quality care.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every caretaker on our platform undergoes thorough background
                  checks and training to ensure they meet our high standards of
                  excellence and professionalism.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">
                      Verified Professionals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      All caretakers are background-checked and certified
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Clock className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">
                      Flexible Scheduling
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Book care by the hour, day, or longer-term arrangements
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CheckCircle className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">Quality Assured</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Regular monitoring and feedback to maintain excellence
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <HeartPulse className="h-8 w-8 text-primary mb-2" />
                    <CardTitle className="text-lg">
                      Compassionate Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Empathetic professionals who treat your family like their
                      own
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Ready to Find Your Perfect Caretaker?
            </h2>
            <p className="text-lg opacity-90 text-pretty">
              Join thousands of families who trust Care.xyz for their caregiving
              needs
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary" className="text-base">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
