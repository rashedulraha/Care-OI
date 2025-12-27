"use client"

import type React from "react"

import { use, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { services, divisions, districts, areas } from "@/lib/services-data"
import { ArrowLeft, Calendar, MapPin, DollarSign } from "lucide-react"

export default function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const service = services[id]

  const [durationType, setDurationType] = useState<"hours" | "days">("hours")
  const [duration, setDuration] = useState(1)
  const [selectedDivision, setSelectedDivision] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")
  const [selectedArea, setSelectedArea] = useState("")
  const [address, setAddress] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Calculate total price in real-time
  const rate = durationType === "hours" ? service.hourlyRate : service.dailyRate
  const totalPrice = rate * duration

  // Reset district and area when division changes
  useEffect(() => {
    setSelectedDistrict("")
    setSelectedArea("")
  }, [selectedDivision])

  // Reset area when district changes
  useEffect(() => {
    setSelectedArea("")
  }, [selectedDistrict])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1000)
  }

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            href={`/service/${service.id}`}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {service.name}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Book {service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Duration Section */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Duration
                      </Label>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="durationType">Type</Label>
                          <Select
                            value={durationType}
                            onValueChange={(value: "hours" | "days") => setDurationType(value)}
                          >
                            <SelectTrigger id="durationType">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="hours">Hours</SelectItem>
                              <SelectItem value="days">Days</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="duration">Number of {durationType}</Label>
                          <Input
                            id="duration"
                            type="number"
                            min="1"
                            max={durationType === "hours" ? 24 : 365}
                            value={duration}
                            onChange={(e) => setDuration(Number(e.target.value))}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Location Section */}
                    <div className="space-y-4">
                      <Label className="text-base font-semibold flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Location
                      </Label>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="division">Division</Label>
                          <Select value={selectedDivision} onValueChange={setSelectedDivision}>
                            <SelectTrigger id="division">
                              <SelectValue placeholder="Select division" />
                            </SelectTrigger>
                            <SelectContent>
                              {divisions.map((division) => (
                                <SelectItem key={division} value={division}>
                                  {division}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="district">District</Label>
                          <Select
                            value={selectedDistrict}
                            onValueChange={setSelectedDistrict}
                            disabled={!selectedDivision}
                          >
                            <SelectTrigger id="district">
                              <SelectValue placeholder="Select district" />
                            </SelectTrigger>
                            <SelectContent>
                              {selectedDivision &&
                                districts[selectedDivision]?.map((district) => (
                                  <SelectItem key={district} value={district}>
                                    {district}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="area">Area</Label>
                          <Select value={selectedArea} onValueChange={setSelectedArea} disabled={!selectedDistrict}>
                            <SelectTrigger id="area">
                              <SelectValue placeholder="Select area" />
                            </SelectTrigger>
                            <SelectContent>
                              {selectedDistrict &&
                                areas[selectedDistrict]?.map((area) => (
                                  <SelectItem key={area} value={area}>
                                    {area}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Full Address</Label>
                        <Input
                          id="address"
                          type="text"
                          placeholder="House/Flat number, Street, Landmark"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={!selectedDivision || !selectedDistrict || !selectedArea || !address || isLoading}
                    >
                      {isLoading ? "Confirming Booking..." : "Confirm Booking"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Service</p>
                    <p className="font-medium">{service.name}</p>
                  </div>

                  <div className="pt-4 border-t border-border space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Rate per {durationType === "hours" ? "hour" : "day"}
                      </span>
                      <span className="font-medium">৳{rate}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium">
                        {duration} {durationType}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-lg">Total Price</span>
                      </div>
                      <span className="text-2xl font-bold text-primary">৳{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      This is an estimated cost. Final pricing may vary based on specific requirements and caretaker
                      availability.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
