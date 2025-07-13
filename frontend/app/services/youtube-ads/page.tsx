"use client"

import { motion } from "framer-motion"
import { Video, Play, Target, Users, CheckCircle, ArrowRight, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function YouTubeAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white">
              <Award className="w-5 h-5 mr-2" />
              YouTube Advertising Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              YouTube Advertising
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Capture attention with engaging video ads on the world's second-largest search engine. Reach billions of
              viewers and drive meaningful engagement with strategic YouTube advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700"
              >
                <Link href="/contact">
                  Launch Video Campaign <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Get Video Strategy</Link>
              </Button>
            </div>
          </motion.div>
        </div>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Complete YouTube Advertising Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From TrueView ads to YouTube Shorts, we create video campaigns that engage and convert
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Play,
                title: "TrueView In-Stream Ads",
                description: "Skippable video ads that play before, during, or after YouTube videos.",
                features: ["Skippable Format", "Cost-Effective", "Brand Awareness", "Engagement Tracking"],
              },
              {
                icon: Video,
                title: "YouTube Shorts Ads",
                description: "Reach younger audiences with vertical video ads in YouTube Shorts feed.",
                features: ["Vertical Format", "Mobile-First", "Gen Z Targeting", "High Engagement"],
              },
              {
                icon: Target,
                title: "Discovery Ads",
                description: "Promote your videos in YouTube search results and related video suggestions.",
                features: ["Search Placement", "Related Videos", "Thumbnail Optimization", "Click-Based Pricing"],
              },
              {
                icon: Users,
                title: "Bumper Ads",
                description: "6-second non-skippable ads perfect for brand awareness and reach campaigns.",
                features: ["6-Second Format", "Non-Skippable", "Brand Recall", "Frequency Capping"],
              },
              {
                icon: TrendingUp,
                title: "Video Action Campaigns",
                description: "Drive conversions with video ads optimized for specific actions and goals.",
                features: ["Conversion Focus", "Action-Oriented", "Smart Bidding", "Performance Tracking"],
              },
              {
                icon: Award,
                title: "Masthead Campaigns",
                description: "Premium placement at the top of YouTube homepage for maximum visibility.",
                features: ["Homepage Placement", "Premium Inventory", "Massive Reach", "Brand Impact"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-red-50/30">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
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

      <Footer />
    </div>
  )
}
