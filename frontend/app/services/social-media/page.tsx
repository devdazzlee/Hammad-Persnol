"use client"

import { motion } from "framer-motion"
import { Share2, Heart, MessageCircle, Camera, CheckCircle, ArrowRight, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
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
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
              <Award className="w-5 h-5 mr-2" />
              Social Media Specialists
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Social Media Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Build your brand presence and engage with your audience across all major social media platforms. Create
              meaningful connections that drive business growth and customer loyalty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700"
              >
                <Link href="/contact">
                  Boost Your Social Presence <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Get Social Strategy</Link>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Complete Social Media Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From content creation to community management, we handle every aspect of your social media presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Content Creation",
                description: "Engaging visual and written content that resonates with your target audience.",
                features: ["Graphic Design", "Video Content", "Copywriting", "Photography"],
              },
              {
                icon: MessageCircle,
                title: "Community Management",
                description: "Build and nurture your online community with active engagement and support.",
                features: ["Daily Engagement", "Comment Management", "Customer Support", "Community Building"],
              },
              {
                icon: Share2,
                title: "Social Media Strategy",
                description: "Comprehensive strategy development tailored to your business goals and audience.",
                features: ["Platform Strategy", "Content Calendar", "Audience Analysis", "Competitor Research"],
              },
              {
                icon: Heart,
                title: "Influencer Marketing",
                description: "Partner with influencers to expand your reach and build authentic connections.",
                features: [
                  "Influencer Outreach",
                  "Campaign Management",
                  "Content Collaboration",
                  "Performance Tracking",
                ],
              },
              {
                icon: TrendingUp,
                title: "Social Media Advertising",
                description: "Targeted social media ads that drive traffic, leads, and conversions.",
                features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Twitter Ads"],
              },
              {
                icon: Award,
                title: "Analytics & Reporting",
                description: "Detailed insights and reporting to measure and optimize your social media performance.",
                features: ["Performance Analytics", "Engagement Metrics", "ROI Tracking", "Monthly Reports"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-pink-50/30">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl flex items-center justify-center mb-4">
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
        className="py-20 bg-gradient-to-r from-pink-600 to-rose-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Social Media Results</h2>
            <p className="text-xl opacity-90">Real outcomes from our social media campaigns</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "300%", label: "Engagement Increase" },
              { metric: "250%", label: "Follower Growth" },
              { metric: "180%", label: "Brand Awareness Boost" },
              { metric: "220%", label: "Lead Generation Growth" },
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
