"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Users, Megaphone, CheckCircle, ArrowRight, Award, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MiniContactForm from "@/components/mini-contact-form" // Import the new component

export default function BookMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navbar />

      {/* Hero Section - Keep this for main title/description */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <Award className="w-5 h-5 mr-2" />
              Bestseller Marketing Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Book Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your book into a bestseller with our comprehensive marketing strategies. From Amazon
              optimization to social media campaigns, we help authors reach their target audience and maximize sales.
            </p>
            {/* Removed MiniContactForm from here */}
          </motion.div>
        </div>
      </section>

      {/* New Section for MiniContactForm - provides its own spacing */}
      <section className="py-20 px-4 md:px-6">
        <MiniContactForm
          heading="Get Your Free Marketing Strategy"
          paragraph={
            <>
              <p>
                Ready to boost your book sales? Fill out the form for a tailored marketing strategy and a free
                consultation on how we can make your book a bestseller.
              </p>
              <p className="mt-4">
                During this session, we'll discuss proven strategies for Amazon optimization, social media
                engagement, PR outreach, and more.
              </p>
              <p className="mt-4">
                Don't let your book get lost in the crowd. Our data-driven approach and innovative campaigns are
                designed to elevate your author platform and drive significant sales.
              </p>
            </>
          }
          initialService="marketing"
        />
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Complete Book Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic marketing campaigns designed to maximize your book's visibility and sales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Amazon Marketing",
                description: "Optimize your book's presence on Amazon with strategic marketing and advertising.",
                features: ["Amazon Ads", "Keyword Optimization", "Review Management", "Bestseller Campaigns"],
              },
              {
                icon: Users,
                title: "Social Media Marketing",
                description: "Build your author brand and engage readers across all social media platforms.",
                features: ["Facebook Marketing", "Instagram Campaigns", "Twitter Promotion", "TikTok BookTok"],
              },
              {
                icon: Megaphone,
                title: "PR & Media Outreach",
                description: "Get media coverage and reviews to increase your book's credibility and reach.",
                features: ["Press Releases", "Media Interviews", "Podcast Bookings", "Book Reviews"],
              },
              {
                icon: TrendingUp,
                title: "Launch Campaigns",
                description: "Create buzz around your book launch with strategic pre-launch and launch marketing.",
                features: ["Pre-Launch Strategy", "Launch Events", "Email Campaigns", "Influencer Outreach"],
              },
              {
                icon: Star,
                title: "Bestseller Strategy",
                description: "Implement proven strategies to help your book reach bestseller status.",
                features: ["Bestseller Campaigns", "Category Optimization", "Sales Funnels", "Cross-Promotion"],
              },
              {
                icon: Award,
                title: "Author Branding",
                description: "Build your personal brand as an author to attract and retain readers.",
                features: ["Author Website", "Brand Strategy", "Content Marketing", "Speaking Opportunities"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/30">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Book Marketing Results</h2>
            <p className="text-xl opacity-90">Real outcomes from our book marketing campaigns</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "50+", label: "Bestsellers Created" },
              { metric: "400%", label: "Visibility Increase" },
              { metric: "300%", label: "Sales Growth" },
              { metric: "85%", label: "Author Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-bold">{stat.metric}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
