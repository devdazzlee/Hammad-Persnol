"use client"

import { motion } from "framer-motion"
import {
  Target,
  Award,
  Users,
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  BookOpen,
  Search,
  Share2,
  BarChart3,
  Smartphone,
  ArrowRight,
  Quote,
  Calendar,
  DollarSign,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="space-y-4">
              <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                About Our Agency
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                We're Passionate About
                <br />
                <span className="text-5xl md:text-7xl lg:text-8xl">Your Success</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A team of digital marketing experts dedicated to transforming businesses through innovative strategies, 
                data-driven insights, and proven results. We don't just market - we build lasting success stories.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/services">
                  Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-white/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Impact in Numbers</h2>
            <p className="text-xl text-gray-600">Delivering measurable results for businesses worldwide</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Happy Clients", icon: Heart },
              { number: "1000+", label: "Successful Campaigns", icon: Target },
              { number: "$50M+", label: "Revenue Generated", icon: DollarSign },
              { number: "5+", label: "Years Experience", icon: Calendar },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="text-sm px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                From Vision to Reality
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2019, our agency began with a simple mission: to help businesses thrive in the digital age. 
                  What started as a small team of passionate marketers has grown into a comprehensive digital marketing powerhouse.
                </p>
                <p>
                  We've evolved from basic advertising campaigns to offering complete digital transformation services, 
                  including book publishing, e-commerce marketing, and advanced analytics. Our journey has been driven 
                  by one constant: our unwavering commitment to client success.
                </p>
                <p>
                  Today, we're proud to serve businesses across multiple industries, from startups to established enterprises, 
                  helping them navigate the complex digital landscape and achieve sustainable growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: BookOpen, title: "Book Publishing", color: "from-indigo-500 to-purple-500" },
                  { icon: Search, title: "Google Ads", color: "from-red-500 to-orange-500" },
                  { icon: Share2, title: "Social Media", color: "from-blue-600 to-purple-600" },
                  { icon: BarChart3, title: "SEO & Analytics", color: "from-green-500 to-teal-500" },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{service.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're driven by core values that shape everything we do and every relationship we build.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Results-Driven",
                description: "We measure success by the tangible results we deliver for our clients, not just vanity metrics.",
                color: "from-red-500 to-orange-500",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "We stay ahead of digital trends and constantly innovate our strategies to maximize effectiveness.",
                color: "from-yellow-500 to-orange-500",
              },
              {
                icon: Heart,
                title: "Client-First",
                description: "Your success is our success. We treat every client like family and go above and beyond.",
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: Shield,
                title: "Transparency",
                description: "Complete transparency in our processes, pricing, and performance. No hidden fees or surprises.",
                color: "from-blue-600 to-indigo-600",
              },
              {
                icon: Zap,
                title: "Agility",
                description: "We adapt quickly to market changes and optimize campaigns in real-time for maximum impact.",
                color: "from-purple-600 to-pink-600",
              },
              {
                icon: Globe,
                title: "Global Perspective",
                description: "We bring international best practices and insights to help you compete on a global scale.",
                color: "from-green-500 to-teal-500",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
                  <CardContent className="p-0 space-y-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A diverse team of certified professionals with expertise across all aspects of digital marketing and publishing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Hammad Ali",
                role: "Founder & CEO",
                expertise: "Digital Marketing Strategy, Google Ads, Meta Ads",
                certifications: ["Google Ads Certified", "Meta Business Partner", "Amazon Advertising Expert"],
                experience: "8+ years",
                color: "from-purple-600 to-blue-600",
              },
              {
                name: "Sarah Johnson",
                role: "Head of Content & SEO",
                expertise: "Content Strategy, SEO, Book Publishing",
                certifications: ["Google Analytics Certified", "Content Marketing Specialist"],
                experience: "6+ years",
                color: "from-green-500 to-teal-500",
              },
              {
                name: "Michael Chen",
                role: "PPC & Analytics Manager",
                expertise: "Google Ads, Analytics, Conversion Optimization",
                certifications: ["Google Ads Certified", "Google Analytics Individual Qualification"],
                experience: "5+ years",
                color: "from-red-500 to-orange-500",
              },
              {
                name: "Emily Rodriguez",
                role: "Social Media Specialist",
                expertise: "Social Media Marketing, Influencer Partnerships",
                certifications: ["Meta Business Partner", "Social Media Marketing Certified"],
                experience: "4+ years",
                color: "from-pink-500 to-rose-500",
              },
              {
                name: "David Thompson",
                role: "E-commerce Marketing Lead",
                expertise: "Amazon PPC, Shopify Marketing, E-commerce Strategy",
                certifications: ["Amazon Advertising Expert", "Shopify Partner"],
                experience: "7+ years",
                color: "from-yellow-500 to-orange-500",
              },
              {
                name: "Lisa Wang",
                role: "Creative Director",
                expertise: "Ad Creative, Brand Design, Video Production",
                certifications: ["Adobe Certified Expert", "Video Marketing Specialist"],
                experience: "5+ years",
                color: "from-indigo-500 to-purple-500",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
                  <CardContent className="p-0 space-y-6">
                    <div className="text-center">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                      <p className="text-purple-600 font-semibold">{member.role}</p>
                      <p className="text-gray-600 text-sm">{member.expertise}</p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="h-4 w-4 text-yellow-500 mr-2" />
                        {member.experience} experience
                      </div>
                      <div className="space-y-2">
                        {member.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from the businesses we've helped transform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Hammad's team transformed our book from a manuscript to a bestseller. Their marketing expertise is unmatched!",
                author: "Jennifer Martinez",
                company: "Bestselling Author",
                rating: 5,
              },
              {
                quote: "Our Google Ads ROI increased by 300% in just 3 months. The team's strategic approach delivered incredible results.",
                author: "Robert Kim",
                company: "Tech Startup CEO",
                rating: 5,
              },
              {
                quote: "Professional, transparent, and results-driven. They've become an extension of our marketing team.",
                author: "Amanda Foster",
                company: "E-commerce Owner",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/30">
                  <CardContent className="p-0 space-y-6">
                    <Quote className="h-8 w-8 text-purple-600" />
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                Ready to Get Started?
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Let's Build Your Success Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join hundreds of successful businesses who've transformed their digital presence with our expert team. 
                Your success story starts here.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/contact">
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 