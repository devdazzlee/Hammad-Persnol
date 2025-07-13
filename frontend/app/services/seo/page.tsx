"use client"

import { motion } from "framer-motion"
import { Search, TrendingUp, FileText, LucideLink, CheckCircle, ArrowRight, Award, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-teal-50">
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
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white">
              <Award className="w-5 h-5 mr-2" />
              SEO Certified Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              SEO & Content Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Improve your organic search visibility and attract qualified traffic with strategic SEO and valuable
              content. Dominate search results and build long-term organic growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
              >
                <a href="/contact">
                  Boost Your Rankings <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <a href="/contact">Get Free SEO Audit</a>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Complete SEO Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From technical optimization to content strategy, we cover every aspect of SEO to drive organic growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Technical SEO",
                description:
                  "Optimize your website's technical foundation for better search engine crawling and indexing.",
                features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "XML Sitemaps"],
              },
              {
                icon: FileText,
                title: "Content Strategy",
                description: "Create valuable, SEO-optimized content that attracts and engages your target audience.",
                features: ["Keyword Research", "Content Planning", "Blog Writing", "Content Optimization"],
              },
              {
                icon: LucideLink,
                title: "Link Building",
                description: "Build high-quality backlinks to increase your domain authority and search rankings.",
                features: ["Guest Posting", "Resource Link Building", "Broken Link Building", "Digital PR"],
              },
              {
                icon: TrendingUp,
                title: "Local SEO",
                description: "Optimize your online presence for local search to attract nearby customers.",
                features: ["Google My Business", "Local Citations", "Review Management", "Local Content"],
              },
              {
                icon: BarChart3,
                title: "SEO Analytics",
                description: "Track and measure your SEO performance with detailed analytics and reporting.",
                features: ["Ranking Tracking", "Traffic Analysis", "Conversion Tracking", "Competitor Analysis"],
              },
              {
                icon: Award,
                title: "E-commerce SEO",
                description: "Specialized SEO strategies for online stores to increase product visibility and sales.",
                features: ["Product Optimization", "Category Pages", "Shopping SEO", "Technical E-commerce"],
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
                    <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
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
        className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">SEO Results</h2>
            <p className="text-xl opacity-90">Real outcomes from our SEO campaigns</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { metric: "150%", label: "Organic Traffic Increase" },
              { metric: "85%", label: "Keyword Ranking Improvement" },
              { metric: "200%", label: "Lead Generation Growth" },
              { metric: "60%", label: "Bounce Rate Reduction" },
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
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let our SEO experts optimize your website for higher rankings and increased organic traffic.
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
            >
              <a href="/contact">
                Start Your SEO Campaign <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
