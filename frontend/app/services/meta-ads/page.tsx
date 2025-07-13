"use client"

import { motion } from "framer-motion"
import { Share2, Target, Users, Heart, CheckCircle, ArrowRight, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function MetaAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <Award className="w-5 h-5 mr-2" />
              Meta Business Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meta Ads (Facebook & Instagram)
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Reach your ideal customers on Facebook and Instagram with compelling ad creatives and precise audience
              targeting. Drive engagement, leads, and sales with our expert Meta advertising strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Link href="/contact">
                  Launch Your Campaign <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Get Free Strategy Session</Link>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Complete Meta Advertising Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Facebook feed ads to Instagram stories, we create and manage campaigns that drive real results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Share2,
                title: "Facebook Feed Ads",
                description:
                  "Capture attention in the Facebook news feed with engaging ad creatives and compelling copy.",
                features: ["Image & Video Ads", "Carousel Ads", "Collection Ads", "Lead Generation"],
              },
              {
                icon: Heart,
                title: "Instagram Story Ads",
                description: "Reach users with immersive full-screen ads in Instagram Stories for maximum engagement.",
                features: ["Story Templates", "Interactive Elements", "Swipe-Up Actions", "Brand Awareness"],
              },
              {
                icon: Target,
                title: "Audience Targeting",
                description: "Leverage Meta's powerful targeting options to reach your ideal customers with precision.",
                features: ["Custom Audiences", "Lookalike Audiences", "Interest Targeting", "Behavioral Targeting"],
              },
              {
                icon: Users,
                title: "Messenger Ads",
                description: "Start conversations with potential customers through targeted Messenger advertising.",
                features: ["Click-to-Messenger", "Sponsored Messages", "Lead Qualification", "Customer Support"],
              },
              {
                icon: TrendingUp,
                title: "Retargeting Campaigns",
                description: "Re-engage website visitors and previous customers with strategic retargeting campaigns.",
                features: ["Website Retargeting", "Video Viewers", "Engagement Retargeting", "Purchase Retargeting"],
              },
              {
                icon: Award,
                title: "E-commerce Integration",
                description: "Connect your product catalog for dynamic ads and seamless shopping experiences.",
                features: ["Dynamic Product Ads", "Catalog Integration", "Shopping Tags", "Conversion Tracking"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-blue-50/30">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
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
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Meta Ads Results</h2>
            <p className="text-xl opacity-90">Real outcomes from our Facebook & Instagram campaigns</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "250%", label: "Engagement Increase" },
              { metric: "180%", label: "Lead Generation Boost" },
              { metric: "320%", label: "ROAS Improvement" },
              { metric: "65%", label: "Cost Per Click Reduction" },
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

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our Meta advertising experts create campaigns that engage your audience and drive conversions.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Link href="/contact">
                Start Your Meta Campaign <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
