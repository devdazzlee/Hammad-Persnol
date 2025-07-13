"use client"

import { motion } from "framer-motion"
import { ShoppingBag, Globe, CreditCard, Users, CheckCircle, ArrowRight, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ShopifyMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white">
              <Award className="w-5 h-5 mr-2" />
              Shopify Plus Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Shopify Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Optimize your Shopify store for maximum conversions and implement growth-focused marketing strategies.
              Drive traffic, increase sales, and build a thriving e-commerce business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
              >
                <Link href="/contact">
                  Optimize Your Store <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Get Store Audit</Link>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Complete Shopify Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From store optimization to marketing automation, we help you maximize your Shopify success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: "Store Optimization",
                description: "Optimize your Shopify store for better user experience and higher conversion rates.",
                features: [
                  "Conversion Rate Optimization",
                  "Page Speed Optimization",
                  "Mobile Optimization",
                  "UX/UI Improvements",
                ],
              },
              {
                icon: Globe,
                title: "SEO & Content Marketing",
                description: "Improve your store's search visibility and attract organic traffic with strategic SEO.",
                features: ["Product SEO", "Blog Content", "Technical SEO", "Local SEO"],
              },
              {
                icon: CreditCard,
                title: "Paid Advertising",
                description: "Drive targeted traffic to your store with strategic paid advertising campaigns.",
                features: ["Google Shopping Ads", "Facebook Ads", "Instagram Shopping", "Retargeting Campaigns"],
              },
              {
                icon: Users,
                title: "Email Marketing",
                description: "Build customer relationships and drive repeat sales with effective email marketing.",
                features: [
                  "Email Automation",
                  "Abandoned Cart Recovery",
                  "Newsletter Campaigns",
                  "Customer Segmentation",
                ],
              },
              {
                icon: TrendingUp,
                title: "Social Media Integration",
                description:
                  "Integrate your store with social media platforms to expand your reach and sales channels.",
                features: ["Social Commerce", "Instagram Shopping", "Facebook Shop", "Social Media Ads"],
              },
              {
                icon: Award,
                title: "Analytics & Reporting",
                description: "Track your store's performance and optimize based on data-driven insights.",
                features: ["Google Analytics Setup", "Conversion Tracking", "Performance Reports", "ROI Analysis"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-green-50/30">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
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
        className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Shopify Marketing Results</h2>
            <p className="text-xl opacity-90">Real outcomes from our Shopify optimization campaigns</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "180%", label: "Conversion Rate Improvement" },
              { metric: "250%", label: "Traffic Increase" },
              { metric: "300%", label: "Revenue Growth" },
              { metric: "65%", label: "Cart Abandonment Reduction" },
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
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Scale Your Shopify Store?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our Shopify experts optimize your store and implement marketing strategies that drive real results.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
            >
              <Link href="/contact">
                Start Your Shopify Growth <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
