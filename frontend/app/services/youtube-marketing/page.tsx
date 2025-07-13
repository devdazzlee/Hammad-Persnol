"use client"

import { motion } from "framer-motion"
import { Video, Play, Target, Users, CheckCircle, ArrowRight, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function YouTubeMarketingPage() {
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
              YouTube Marketing Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              YouTube Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Capture attention with engaging video content on the world's second-largest search engine. Build your
              brand, engage audiences, and drive conversions with strategic YouTube marketing.
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
              Complete YouTube Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From channel optimization to video advertising, we help you succeed on YouTube
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Play,
                title: "YouTube Ads",
                description: "Reach your target audience with compelling video advertisements across YouTube.",
                features: ["TrueView Ads", "Bumper Ads", "Discovery Ads", "YouTube Shorts Ads"],
              },
              {
                icon: Video,
                title: "Channel Optimization",
                description: "Optimize your YouTube channel for maximum visibility and subscriber growth.",
                features: ["Channel Setup", "SEO Optimization", "Thumbnail Design", "Channel Art"],
              },
              {
                icon: Target,
                title: "Content Strategy",
                description: "Develop engaging video content that resonates with your target audience.",
                features: ["Content Planning", "Video Scripts", "Production Support", "Publishing Schedule"],
              },
              {
                icon: Users,
                title: "Audience Growth",
                description: "Build a loyal subscriber base and increase engagement on your videos.",
                features: ["Subscriber Growth", "Community Building", "Engagement Tactics", "Influencer Outreach"],
              },
              {
                icon: TrendingUp,
                title: "YouTube SEO",
                description: "Optimize your videos to rank higher in YouTube search results.",
                features: ["Keyword Research", "Video Optimization", "Tags & Descriptions", "Playlist Strategy"],
              },
              {
                icon: Award,
                title: "Analytics & Reporting",
                description: "Track performance and optimize your YouTube marketing strategy with detailed analytics.",
                features: ["Performance Tracking", "Audience Insights", "Revenue Analytics", "Growth Reports"],
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

      {/* Results Section */}
      <motion.section
        className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">YouTube Marketing Results</h2>
            <p className="text-xl opacity-90">Real outcomes from our video marketing campaigns</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "500%", label: "Subscriber Growth" },
              { metric: "180%", label: "View Rate Improvement" },
              { metric: "320%", label: "Engagement Increase" },
              { metric: "250%", label: "Brand Awareness Boost" },
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
