"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    ArrowLeft,
    Award,
    Calendar,
    Globe,
    Handshake,
    Mail,
    MapPin,
    Rocket,
    Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CollaborationPage() {
  const collaborationBenefits = [
    {
      title: "Brand Visibility",
      description: "Get your brand in front of 150-250 tech innovators and space enthusiasts",
      icon: Globe,
    },
    {
      title: "Talent Pipeline",
      description: "Connect with top developers, designers, and innovators for future opportunities",
      icon: Users,
    },
    {
      title: "Innovation Partnership",
      description: "Be part of groundbreaking solutions using NASA's open data",
      icon: Rocket,
    },
    {
      title: "Community Impact",
      description: "Support the next generation of space technology innovators in Egypt",
      icon: Award,
    },
  ]

  const partnershipTiers = [
    {
      name: "Gold Partner",
      amount: "$2,000+",
      benefits: [
        "Logo on main stage backdrop",
        "Speaking opportunity at opening ceremony",
        "Booth space for recruitment",
        "Logo on all promotional materials",
        "Social media mentions",
        "Recognition in press releases",
      ],
      color: "#FBBF24",
    },
    {
      name: "Silver Partner",
      amount: "$1,000 - $1,999",
      benefits: [
        "Logo on event materials",
        "Booth space for recruitment",
        "Social media mentions",
        "Recognition in press releases",
      ],
      color: "#9CA3AF",
    },
    {
      name: "Bronze Partner",
      amount: "$500 - $999",
      benefits: [
        "Logo on event materials",
        "Social media mentions",
        "Recognition in press releases",
      ],
      color: "#92400E",
    },
    {
      name: "Community Partner",
      amount: "In-kind support",
      benefits: [
        "Logo on event materials",
        "Social media mentions",
        "Recognition in press releases",
      ],
      color: "#2E96F5",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Overpass']">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-[#0042A6]/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/img/spaceappshurghada.png" alt="Logo" />
              </div>
              <div>
                <div className="font-['Fira_Sans'] font-bold text-lg">NASA Space Apps Hurghada</div>
                <div className="text-sm text-[#2E96F5]">2nd Edition - 2025</div>
              </div>
            </Link>

            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="font-['Fira_Sans'] font-bold text-4xl md:text-6xl">
                Partner with <span className="text-[#E43700]">NASA Space Apps</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join us in empowering the next generation of space innovators. Partner with NASA Space Apps Hurghada 
                and be part of Egypt's premier space technology hackathon.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex items-center space-x-2 text-gray-700">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">October 4-5, 2025</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">SUNRISE Garden Beach Resort</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Collaboration Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl mb-6">
                Why Partner with NASA Space Apps Hurghada?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                NASA Space Apps Challenge is the world's largest global hackathon, bringing together 
                innovators from over 150 countries. Our Hurghada event is a premier tech gathering 
                in Egypt, attracting top talent and creating lasting impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collaborationBenefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-white border-[#0042A6]/20 hover:border-[#2E96F5]/50 transition-all duration-300 shadow-sm rounded-xl"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#2E96F5]/20 flex items-center justify-center mx-auto rounded-xl">
                      <benefit.icon className="w-8 h-8 text-[#2E96F5]" />
                    </div>
                    <h3 className="font-['Fira_Sans'] font-bold text-lg">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Tiers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-lg text-gray-600">
                Choose the partnership level that best fits your organization's goals and budget.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipTiers.map((tier, index) => (
                <Card
                  key={index}
                  className="bg-white border-[#0042A6]/20 hover:border-[#2E96F5]/50 transition-all duration-300 shadow-sm rounded-xl relative"
                >
                  <CardContent className="p-6 space-y-6">
                    <div className="text-center">
                      <h3 className="font-['Fira_Sans'] font-bold text-xl mb-2" style={{ color: tier.color }}>
                        {tier.name}
                      </h3>
                      <div className="text-2xl font-bold text-gray-900 mb-4">{tier.amount}</div>
                    </div>

                    <div className="space-y-3">
                      {tier.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#2E96F5] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl mb-6">
                Event Impact & Reach
              </h2>
              <p className="text-lg text-gray-600">
                Join an event that makes a real difference in the tech community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "150-250", label: "Participants", icon: Users },
                { number: "30-50", label: "Teams", icon: Handshake },
                { number: "48", label: "Hours of Innovation", icon: Calendar },
                { number: "150+", label: "Countries Globally", icon: Globe },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white border-[#0042A6]/20 shadow-sm rounded-xl"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-[#2E96F5]/20 flex items-center justify-center mx-auto rounded-xl">
                      <stat.icon className="w-6 h-6 text-[#2E96F5]" />
                    </div>
                    <div className="font-bold text-3xl text-[#2E96F5]">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl">
              Ready to Partner with Us?
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and our team will get in touch to discuss partnership opportunities 
              and how we can work together to make NASA Space Apps Hurghada even more impactful.
            </p>
            
            <div className="bg-white border border-[#2E96F5]/30 rounded-xl shadow-lg overflow-hidden">
            <iframe
              className="w-full border border-[#2E96F5]/30 rounded-xl shadow-lg"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfxSbM0Rc1jH8UYBlgTEJaHGVhhM0Y1uqDRqxD3o7raDUg0VQ/viewform?embedded=true" height="600">
                Loading…
            </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl">
              Have Questions?
            </h2>
            <p className="text-lg text-gray-600">
              Our team is here to help you understand partnership opportunities and answer any questions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href="mailto:info@spaceappshurghada.info">
                <Button className="bg-[#2E96F5] hover:bg-[#2E96F5]/90 text-white font-bold px-8 py-4 transition-all duration-300 transform hover:scale-105 rounded-xl">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </a>
              <a href="tel:+201212145841">
                <Button variant="outline" className="border-[#2E96F5] text-[#2E96F5] hover:bg-[#2E96F5] hover:text-white font-bold px-8 py-4 transition-all duration-300 transform hover:scale-105 rounded-xl">
                  <span>+20 121 214 5841</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                <Image
                  src="/img/spaceappshurghada.png"
                  alt="NASA Space Apps Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-['Fira_Sans'] font-bold">NASA Space Apps Hurghada</div>
                <div className="text-sm text-[#2E96F5]">2nd Edition - 2025</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">© 2025 NASA Space Apps Hurghada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
