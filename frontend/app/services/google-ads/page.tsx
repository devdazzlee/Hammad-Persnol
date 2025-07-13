"use client"

import { motion } from "framer-motion"
import { Search, Target, BarChart3, MousePointer, CheckCircle, ArrowRight, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function GoogleAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
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
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white">
              <Award className="w-5 h-5 mr-2" />
              Google Ads Certified Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Google Ads & PPC Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Maximize your ROI with expertly managed Google Ads campaigns. Drive targeted traffic, increase
              conversions, and grow your business with our proven PPC strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
              >
                <Link href="/contact">
                  Launch Your Campaign <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Get Free PPC Audit</Link>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Complete Google Ads Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From search campaigns to shopping ads, we manage every aspect of your Google Ads success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Search Campaigns",
                description: "Capture high-intent customers actively searching for your products or services.",
                features: ["Keyword Research", "Ad Copy Testing", "Bid Optimization", "Quality Score Improvement"],
              },
              {
                icon: MousePointer,
                title: "Display Advertising",
                description: "Reach potential customers across millions of websites with compelling visual ads.",
                features: ["Banner Ads", "Responsive Display", "Remarketing", "Audience Targeting"],
              },
              {
                icon: BarChart3,
                title: "Shopping Campaigns",
                description: "Showcase your products directly in Google search results with product images and prices.",
                features: ["Product Feed Optimization", "Smart Shopping", "Local Inventory", "Performance Max"],
              },
              {
                icon: Target,
                title: "YouTube Ads",
                description: "Engage audiences with video content on YouTube and across Google's video network.",
                features: ["TrueView Ads", "Bumper Ads", "Video Discovery", "Action Campaigns"],
              },
              {
                icon: TrendingUp,
                title: "Performance Max",
                description: "Access all Google Ads inventory from a single campaign using machine learning.",
                features: ["AI-Powered", "Cross-Channel", "Asset Optimization", "Goal-Based Bidding"],
              },
              {
                icon: Award,
                title: "Local Service Ads",
                description: "Connect with local customers searching for services in your area.",
                features: ["Google Guarantee", "Local Visibility", "Lead Generation", "Review Management"],
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
                    <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mb-4">
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
        className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Google Ads Results</h2>
            <p className="text-xl opacity-90">Real outcomes from our PPC campaigns</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "300%", label: "ROI Increase" },
              { metric: "65%", label: "Cost Per Click Reduction" },
              { metric: "180%", label: "Conversion Rate Boost" },
              { metric: "250%", label: "Quality Score Improvement" },
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
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Ready to Dominate Google Search?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our Google Ads experts create campaigns that drive qualified traffic and maximize your ROI.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
            >
              <Link href="/contact">
                Start Your Google Ads Campaign <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
