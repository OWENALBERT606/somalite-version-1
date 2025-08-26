"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  BookOpen,
  BarChart3,
  Users,
  FileText,
  GraduationCap,
  TrendingUp,
  Play,
  MessageSquare,
  Star,
  Check,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

const carouselItems = [
  {
    title: "Advanced Report Generation",
    description: "Create comprehensive academic reports with customizable templates and automated data integration.",
    image: "/features/modern-dashboard-with-charts-and-reports.png",
  },
  {
    title: "Student Performance Analytics",
    description: "Track student progress with detailed analytics and performance insights across all subjects.",
    image: "/features/student-analytics-dashboard-with-graphs.png",
  },
  {
    title: "Multi-Campus Management",
    description: "Manage multiple campuses from a single platform with centralized data and reporting.",
    image: "/features/multi-campus-management-interface.png",
  },
  {
    title: "Real-time Collaboration",
    description: "Enable teachers and administrators to collaborate in real-time on student assessments.",
    image: "/features/feature-2.png",
  },
]

export default function WelcomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="/logos/ChatGPT Image Aug 26, 2025, 04_24_48 PM.png" width={100} height={100} alt="somalite"/>          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#versions" className="text-muted-foreground hover:text-primary transition-colors">
              Versions
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#showcase" className="text-muted-foreground hover:text-primary transition-colors">
              Showcase
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Welcome Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">SomaLite</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Streamline your academic management with our comprehensive report generation and student data management
              system. Built for educators, by educators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/login">Get Started</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Demo
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Request System
              </Button>
            </div>
          </div>
        </section>

        <section id="showcase" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">See SomaLite in Action</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover how SomaLite transforms academic management with powerful features and intuitive design
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg bg-card border border-border">
              <div className="relative h-96 flex items-center justify-center">
                <img
                  src={carouselItems[currentSlide].image || "/placeholder.svg"}
                  alt={carouselItems[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">{carouselItems[currentSlide].title}</h4>
                  <p className="text-lg opacity-90">{carouselItems[currentSlide].description}</p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="flex justify-center mt-6 space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="versions" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Choose Your Version</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the perfect SomaLite version that fits your institution's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((version) => (
              <Card
                key={version}
                className="border-border hover:shadow-lg transition-all hover:border-primary/50 relative"
              >
                {version === 4 && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary mb-2">Version {version}</CardTitle>
                  <div className="text-3xl font-bold text-foreground mb-4">
                    ${version === 1 ? "99" : version === 2 ? "199" : version === 3 ? "299" : "399"}
                    <span className="text-sm text-muted-foreground">/month</span>
                  </div>
                  <CardDescription className="text-muted-foreground mb-6">
                    {version === 1 && "Basic report generation and student management"}
                    {version === 2 && "Advanced analytics and custom templates"}
                    {version === 3 && "Multi-campus support and API access"}
                    {version === 4 && "Enterprise features with priority support"}
                  </CardDescription>

                  <div className="space-y-2 text-left mb-6">
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>Up to {version * 500} students</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>{version * 2} report templates</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>{version >= 2 ? "Advanced" : "Basic"} analytics</span>
                    </div>
                    {version >= 3 && (
                      <div className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-2" />
                        <span>API Access</span>
                      </div>
                    )}
                    {version === 4 && (
                      <div className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-2" />
                        <span>Priority Support</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      variant={version === 4 ? "default" : "outline"}
                    >
                      Book Version {version}
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-full text-primary hover:text-primary/80">
                          View Features
                          <ChevronDown className="w-4 h-4 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuItem>
                          <FileText className="w-4 h-4 mr-2" />
                          Report Generation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Users className="w-4 h-4 mr-2" />
                          Student Management
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BarChart3 className="w-4 h-4 mr-2" />
                          Analytics Dashboard
                        </DropdownMenuItem>
                        {version >= 2 && (
                          <DropdownMenuItem>
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Advanced Analytics
                          </DropdownMenuItem>
                        )}
                        {version >= 3 && (
                          <DropdownMenuItem>
                            <BookOpen className="w-4 h-4 mr-2" />
                            API Integration
                          </DropdownMenuItem>
                        )}
                        {version === 4 && (
                          <DropdownMenuItem>
                            <Star className="w-4 h-4 mr-2" />
                            Priority Support
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Powerful Features</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage student data and generate comprehensive reports efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">Generate Reports in Seconds</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Create detailed academic reports with just a few clicks. Customize templates and export in multiple
                  formats.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">Student Data Management</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Efficiently organize and manage student information, grades, and academic progress in one secure
                  platform.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">Analytics & Insights</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Gain valuable insights into student performance and institutional trends with advanced analytics.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">Curriculum Tracking</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Monitor curriculum progress and ensure educational standards are met across all programs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">Performance Monitoring</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Track student performance over time and identify areas for improvement and intervention.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-foreground">Academic Excellence</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Support academic excellence with tools designed to enhance educational outcomes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardHeader className="text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl text-foreground mb-4">Need a Custom Feature?</CardTitle>
              <CardDescription className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're constantly improving SomaLite based on user feedback. Have a specific feature in mind? Let us know
                and we'll consider it for our next update.
              </CardDescription>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <MessageSquare className="w-4 h-4 mr-2" />
                Request Feature
              </Button>
            </CardHeader>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-muted rounded-lg p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Academic Management?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of educators who trust SomaLite to streamline their academic processes and improve student
            outcomes.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Start Your Free Trial
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 py-12">
          <section id="contact" className="mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h3>
              <p className="text-muted-foreground">Ready to transform your academic management? Contact us today!</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Phone</CardTitle>
                  <CardDescription>
                    <a href="tel:+1234567890" className="text-primary hover:underline">
                      +1 (234) 567-8900
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardDescription>
                    <a href="mailto:info@somalite.com" className="text-primary hover:underline">
                      info@somalite.com
                    </a>
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Address</CardTitle>
                  <CardDescription>
                    123 Education Street
                    <br />
                    Academic City, AC 12345
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="text-foreground font-semibold">SomaLite</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#support" className="hover:text-primary transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
            © 2024 SomaLite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
