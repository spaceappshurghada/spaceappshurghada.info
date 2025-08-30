"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  Rocket,
  BarChart3,
  Bot,
  Microscope,
  Mail,
  Phone,
  ExternalLink,
  Menu,
  X,
  Earth,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NASASpaceAppsHurghada() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "details", "challenges", "sponsors", "team", "register"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const teamMembers = [
    {
      name: "Full Name",
      role: "Title",
      bio: "Tech leader and community builder passionate about space innovation",
      image: "/tech-leader-headshot.png",
    },
    {
      name: "Full Name",
      role: "Title",
      bio: "Tech leader and community builder passionate about space innovation",
      image: "/tech-leader-headshot.png",
    },
    {
      name: "Full Name",
      role: "Title",
      bio: "Tech leader and community builder passionate about space innovation",
      image: "/tech-leader-headshot.png",
    },
    {
      name: "Full Name",
      role: "Title",
      bio: "Tech leader and community builder passionate about space innovation",
      image: "/tech-leader-headshot.png",
    },
  ]

  const challenges = [
    {
      title: "Earth & Environment",
      icon: Earth,
      description: "Sustainability and climate solutions using NASA Earth data",
      image: "/nasa-earth-satellite-view.png",
    },
    {
      title: "Space Exploration",
      icon: Rocket,
      description: "Future missions and space technology innovations",
      image: "/nasa-mars-exploration.png",
    },
    {
      title: "Data & Visualization",
      icon: BarChart3,
      description: "Making NASA's vast datasets accessible and meaningful",
      image: "/nasa-data-visualization.png",
    },
    {
      title: "Robotics & AI",
      icon: Bot,
      description: "Smart tools for research and space exploration",
      image: "/nasa-ai-robotics.png",
    },
    {
      title: "Humanity & Science",
      icon: Microscope,
      description: "Health, learning, and global community solutions",
      image: "/nasa-human-research.png",
    },
  ]

  const socials = [
    {
      name: "Facebook",
      icon: "facebook",
      url: "https://www.facebook.com/spaceappshurghada",
    },
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/company/spaceappshurghada",
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/spaceappshurghada",
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/spaceappshurghada",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 font-['Overpass']">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-[#0042A6]/20 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <a href="https://spaceappshurghada.info"> <img src="/img/logo.png" alt="Logo" /> </a>
              </div>
              <div>
                <div className="font-['Fira_Sans'] font-bold text-lg">NASA Space Apps Hurghada</div>
                <div className="text-sm text-[#2E96F5]">2nd Edition - 2025</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Details", "Challenges", "Sponsors", "Team", "Register"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm hover:text-[#0042A6] transition-colors ${
                    activeSection === item.toLowerCase() ? "text-[#0042A6]" : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-[#0042A6]/20">
              <div className="flex flex-col space-y-4 mt-4">
                {["About", "Details", "Challenges", "Sponsors", "Team", "Register"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-sm hover:text-[#2E96F5] transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: "brightness(0.3) contrast(0.8)" }}
        >
          <source src="/videos/first-edition.webm" type="video/webm" />
        </video>

        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' strokeWidth='1' opacity='0.1'%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3Ccircle cx='50' cy='50' r='35'/%3E%3Cpath d='M20,50 Q50,20 80,50 Q50,80 20,50'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "100px 100px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="items-center text-center">
            <div className="space-y-8">
              <div className="space-y-4 items-center text-center">
                <h1 className="font-['Fira_Sans'] font-bold text-6xl md:text-6xl lg:text-8xl leading-tight text-white">
                  {/* NASA Space Apps Hurghada */}
                  <span className="block text-[#E43700]">2nd Edition</span>
                </h1>
                <p className="mx-auto text-center text-lg md:text-xl text-gray-400 max-w-2xl">
                  Join the world's largest global hackathon, where thousands innovate using NASA's open data to solve
                  problems on Earth and in space.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <div className="flex items-center text-center space-x-2 text-white">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">October 4-5, 2025</span>
                </div>
                <div className="flex items-center text-center space-x-2 text-white">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Marine Sports Club, Hurghada</span>
                </div>
              </div>
              <div className="mt-10">
                <a href="https://www.spaceappschallenge.org/2025/local-events/hurghada" target="_blank">
                  <Button className="bg-[#EAFE07] hover:bg-[#EAFE07]/90 text-[#07173F] font-bold text-xl me-0 mb-5 lg:me-5 lg:mb-0 p-8 transition-all duration-300 transform hover:scale-105 rounded-xl">
                    Global Registration Open
                    <ExternalLink className="w-5 h-5 ml-2"/>
                  </Button>
                </a>
                <Button className="bg-[#EAFE07] hover:bg-[#EAFE07]/90 text-[#07173F] font-bold text-xl px-10 py-8 transition-all duration-300 transform hover:scale-105 rounded-xl" disabled>
                  Local Registration (SOON)
                </Button>
              </div>
            </div>

            {/* <div className="flex justify-center relative">
              <div className="relative">
                <div className="overflow-hidden border-2 border-[#2E96F5]/30 rounded-xl">
                  <Image
                    src="/img/closing.webp"
                    alt="NASA Space Apps participants collaborating"
                    width={384}
                    height={256}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full overflow-hidden border-4 border-[#07173F] bg-[#07173F]">
                  <Image
                    src="/earth-from-space-nasa.png"
                    alt="Earth from space"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#E43700] rounded-full flex items-center justify-center animate-pulse">
                  <Rocket className="w-8 h-8 text-gray-900" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Add global map image */}
            <div className="w-full max-w-2xl mx-auto mb-8">
              <div className="relative">
                <div className="w-full h-48 overflow-hidden border border-[#2E96F5]/30 rounded-xl">
                  <Image
                    src="/img/opening.jpg"
                    alt="Global NASA Space Apps Challenge locations"
                    width={640}
                    height={192}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Small circular collaboration photo */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full overflow-hidden border-4 border-[#07173F] bg-[#07173F]">
                  <Image
                    src="/team-collaboration-circle.png"
                    alt="Team collaboration"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl">About NASA Space Apps Challenge</h2>

            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Since 2012, the NASA International Space Apps Challenge has engaged over 150,000 participants across
                150+ countries in using NASA's free and open data to tackle real-world challenges on Earth and beyond.
              </p>
              <p>
                This year, Hurghada joins the global movement! Our local event will bring together innovators, coders,
                designers, scientists, and storytellers to collaborate and create solutions that could make a difference
                globally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                { title: "Work on real NASA challenges", icon: Rocket },
                { title: "Collaborate with global innovators", icon: Users },
                { title: "Get mentored by industry experts", icon: Microscope },
                { title: "Compete for local and global awards", icon: BarChart3 },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white border-[#0042A6]/20 hover:border-[#2E96F5]/50 transition-colors shadow-sm rounded-xl"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-[#2E96F5]/20 flex items-center justify-center mx-auto rounded-xl">
                      <item.icon className="w-6 h-6 text-[#2E96F5]" />
                    </div>
                    <p className="text-sm">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl text-center mb-16">Event Schedule</h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="space-y-6">
                  {[
                    {
                      day: "Day 1 – October 4",
                      activities: "Opening ceremony, challenge briefing, team formation, start hacking.",
                    },
                    {
                      day: "Day 2 – October 5",
                      activities: "2nd hack day, Final presentations, judging, and award ceremony.",
                    },
                    // {
                    //   day: "Day 3 – October 6",
                    //   activities: "",
                    // },
                  ].map((item, index) => (
                    <Card key={index} className="bg-blue-50 border-[#2E96F5]/30 rounded-xl">
                      <CardContent className="p-6">
                        <h3 className="font-['Fira_Sans'] font-bold text-xl text-[#2E96F5] mb-2">{item.day}</h3>
                        <p className="text-gray-600">{item.activities}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <Card className="bg-white border-[#0042A6]/20 shadow-sm rounded-xl">
                    <CardContent className="p-6 text-center">
                      <Users className="w-8 h-8 text-[#2E96F5] mx-auto mb-2" />
                      <div className="font-bold text-2xl">200–300</div>
                      <div className="text-sm text-gray-500">Participants</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white border-[#0042A6]/20 shadow-sm rounded-xl">
                    <CardContent className="p-6 text-center">
                      <Users className="w-8 h-8 text-[#2E96F5] mx-auto mb-2" />
                      <div className="font-bold text-2xl">40–60</div>
                      <div className="text-sm text-gray-500">Teams</div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-6">
                {/* Venue exterior shot */}
                <Card className="bg-blue-50 border-[#2E96F5]/30 rounded-xl">
                  <CardContent className="p-6">
                    <h3 className="font-['Fira_Sans'] font-bold text-xl text-[#2E96F5] mb-4">
                      Venue: Marine Sports Club, Hurghada
                    </h3>
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src="/marine-sports-club-exterior.png"
                        alt="Marine Sports Club Hurghada exterior"
                        width={400}
                        height={192}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Circular cutouts showing activities */}
                    {/* <div className="flex justify-between mt-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#2E96F5]/30">
                        <Image
                          src="/hacking-in-progress-circle.png"
                          alt="Participants coding"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#2E96F5]/30">
                        <Image
                          src="/mentor-interaction-circle.png"
                          alt="Mentor helping team"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div> */}

                    <p className="text-gray-600 mt-4">
                      1 hall for hacking & presentations, arranged for comfort and productivity.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section id="challenges" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl mb-6">2025 Global Challenge Themes</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Each year, NASA releases new challenges across themes that push the boundaries of innovation and
                problem-solving.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <Card
                  key={index}
                  className="bg-white border-[#0042A6]/20 hover:border-[#2E96F5]/50 transition-all duration-300 hover:transform hover:scale-105 shadow-sm rounded-xl"
                >
                  <CardContent className="p-8 text-center space-y-4">
                    {/* Circular NASA image for "planet" feel */}
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#2E96F5]/30 mb-4">
                      <Image
                        src={challenge.image || "/placeholder.svg"}
                        alt={challenge.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="w-16 h-16 bg-[#2E96F5]/20 rounded-full flex items-center justify-center mx-auto">
                      <challenge.icon className="w-8 h-8 text-[#2E96F5]" />
                    </div>
                    <h3 className="font-['Fira_Sans'] font-bold text-xl">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm">{challenge.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-gray-500">
                <span className="text-[#2E96F5]">Note:</span> Link to global challenge list when NASA releases it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl mb-6">Our Sponsors & Partners</h2>
            <p className="text-lg text-gray-600 mb-16">
              We thank our amazing partners for helping make NASA Space Apps Hurghada possible.
            </p>

            <div className="space-y-12">
              {[
                { tier: "Platinum Sponsors", color: "#E5E7EB" },
                { tier: "Gold Sponsors", color: "#FBBF24" },
                { tier: "Silver Sponsors", color: "#9CA3AF" },
                { tier: "Bronze Sponsors", color: "#92400E" },
                { tier: "Community Partners", color: "#2E96F5" },
              ].map((sponsorTier, index) => (
                <div key={index}>
                  <h3 className="font-['Fira_Sans'] font-bold text-xl mb-8" style={{ color: sponsorTier.color }}>
                    {sponsorTier.tier}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((logo) => (
                      <div
                        key={logo}
                        className="bg-white/10 rounded-lg p-6 flex items-center justify-center h-24 hover:bg-white/20 transition-colors"
                      >
                        <div className="text-xs text-gray-500">Logo {logo}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl mb-6">Meet the Team</h2>

              {/* Team group photo */}
              <div className="w-full max-w-3xl mx-auto mb-8">
                <div className="w-full h-64 overflow-hidden border border-[#2E96F5]/30 rounded-xl">
                  <Image
                    src="/organizing-team-group-photo.png"
                    alt="NASA Space Apps Hurghada organizing team"
                    width={768}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-lg text-gray-600">
                Our organizing team is a group of passionate volunteers, tech leaders, and
                community builders making this event a success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-white border-[#0042A6]/20 hover:border-[#2E96F5]/50 transition-all duration-300 shadow-sm rounded-xl"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#2E96F5]/30 ">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-['Fira_Sans'] font-bold text-lg">{member.name}</h3>
                      <Badge variant="secondary" className="bg-[#2E96F5]/20 text-[#2E96F5] border-[#2E96F5]/30">
                        {member.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section id="register" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-['Fira_Sans'] font-bold text-3xl md:text-5xl">Ready to Join the Challenge?</h2>
            <p className="text-lg text-gray-600">
              Seats are limited — secure your spot today and be part of NASA's global innovation movement!
            </p>
            <div className="mt-10">
              <a href="https://www.spaceappschallenge.org/2025/local-events/hurghada" target="_blank">
                <Button className="bg-[#EAFE07] hover:bg-[#EAFE07]/90 text-[#07173F] font-bold text-xl px-12 py-8 transition-all duration-300 transform hover:scale-105 rounded-xl">
                  Register Globally Now
                  <ExternalLink className="w-5 h-5 ml-2"/>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative overflow-hidden bg-gray-100">
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' strokeWidth='0.5' opacity='0.3'%3E%3Cpath d='M0,30 L60,30 M30,0 L30,60'/%3E%3Ccircle cx='30' cy='30' r='10'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2">
                  <Image
                    src="/img/logo.png"
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
              <p className="text-sm text-gray-600">
                NASA Space Apps Challenge is an international hackathon organized by NASA, supported by global
                collaborators, and hosted locally by volunteer organizers.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-['Fira_Sans'] font-bold text-lg">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-[#2E96F5]" />
                  <Link href="mailto:info@spaceappshurghada.info" className="hover:text-[#2E96F5] transition-colors">
                    info@spaceappshurghada.info
                  </Link>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-[#2E96F5]" />
                  <Link href="tel:+201212145841" className="hover:text-[#2E96F5] transition-colors">
                    +20 121 214 5841
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-['Fira_Sans'] font-bold text-lg">Follow Us</h3>
              <div className="flex space-x-4">
                {socials.map((social) => (
                  <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0042A6]/20 rounded-full flex items-center justify-center hover:bg-[#2E96F5]/20 transition-colors"
                  >
                  <span className="sr-only">{social.name}</span>
                  <img
                    src={`/svg/${social.icon}.svg`}
                    alt={social.name}
                    className="w-5 h-5"
                  />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#0042A6]/20 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-600">© 2025 NASA Space Apps Hurghada. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
