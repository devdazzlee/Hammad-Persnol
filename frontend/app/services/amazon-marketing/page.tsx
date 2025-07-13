"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Target, BarChart3, Star, CheckCircle, ArrowRight, Award, TrendingUp } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AmazonMarketingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
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
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
              <Award className="w-5 h-5 mr-2" />
              Amazon Advertising Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Amazon Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Dominate Amazon marketplace with optimized product listings and strategic advertising campaigns. Increase
              visibility, drive sales, and maximize your Amazon success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700"
              >
                <Link href="/contact">
                  Boost Amazon Sales <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Get Amazon Audit</Link>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
              Complete Amazon Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From PPC management to listing optimization, we help you succeed on Amazon
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Amazon PPC Management",
                description: "Strategic pay-per-click campaigns to increase product visibility and drive sales.",
                features: ["Sponsored Products", "Sponsored Brands", "Sponsored Display", "Campaign Optimization"],
              },
              {
                icon: ShoppingCart,
                title: "Product Listing Optimization",
                description: "Optimize your product listings for maximum visibility and conversion rates.",
                features: ["Keyword Research", "Title Optimization", "Bullet Points", "Product Images"],
              },
              {
                icon: Star,
                title: "Review Management",
                description: "Build and maintain a strong review profile to increase customer trust and sales.",
                features: ["Review Monitoring", "Response Management", "Review Strategy", "Reputation Building"],
              },
              {
                icon: BarChart3,
                title: "Amazon SEO",
                description: "Improve your organic ranking in Amazon search results with strategic optimization.",
                features: ["Keyword Optimization", "Backend Keywords", "Category Optimization", "A9 Algorithm"],
              },
              {
                icon: TrendingUp,
                title: "Brand Store Creation",
                description: "Create a professional Amazon Brand Store to showcase your products and brand story.",
                features: ["Store Design", "Brand Storytelling", "Product Showcase", "Enhanced Content"],
              },
              {
                icon: Award,
                title: "Inventory Management",
                description: "Optimize your inventory levels and prevent stockouts to maximize sales potential.",
                features: ["Stock Monitoring", "Reorder Alerts", "Seasonal Planning", "FBA Optimization"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-orange-50/30">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl flex items-center justify-center mb-4">
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
        className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Amazon Marketing Results</h2>
            <p className="text-xl opacity-90">Real outcomes from our Amazon campaigns</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "200%", label: "Sales Increase" },
              { metric: "150%", label: "Organic Ranking Boost" },
              { metric: "75%", label: "ACoS Reduction" },
              { metric: "300%", label: "Visibility Improvement" },
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
