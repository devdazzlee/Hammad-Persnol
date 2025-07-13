"use client"

import { motion } from "framer-motion"
import { BookOpen, Edit, Palette, Globe, CheckCircle, ArrowRight, Award, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MiniContactForm from "@/components/mini-contact-form" // Import the new component

export default function BookPublishingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
            <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <Award className="w-5 h-5 mr-2" />
              Professional Publishing Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Book Publishing Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your manuscript into a professionally published book. From editing and design to global
              distribution, we handle every aspect of the publishing process with expertise and care.
            </p>
            {/* Removed MiniContactForm from here */}
          </motion.div>
        </div>
      </section>

      {/* New Section for MiniContactForm - provides its own spacing */}
      <section className="py-20 px-4 md:px-6">
        <MiniContactForm
          heading="Get Your Free Publishing Quote"
          paragraph={
            <>
              <p>
                Ready to publish your masterpiece? Fill out the form for a personalized quote and a free
                consultation on our comprehensive book publishing services.
              </p>
              <p className="mt-4">
                Our team of experienced editors, designers, and publishing specialists will guide you through
                every step, ensuring your book meets the highest industry standards.
              </p>
              <p className="mt-4">
                Discover how our tailored packages can simplify your publishing journey and set your book up for
                success. This consultation is a great opportunity to explore your options and get expert advice
                without any commitment.
              </p>
            </>
          }
          initialService="publishing"
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Complete Publishing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end book publishing services from manuscript to bestseller
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Edit,
                title: "Professional Editing",
                description: "Comprehensive editing services to polish your manuscript to perfection.",
                features: ["Developmental Editing", "Copy Editing", "Proofreading", "Line Editing"],
              },
              {
                icon: Palette,
                title: "Cover & Interior Design",
                description: "Eye-catching cover design and professional interior formatting for print and digital.",
                features: ["Custom Cover Design", "Interior Layout", "Typography", "Print & Digital Formats"],
              },
              {
                icon: Globe,
                title: "Global Distribution",
                description: "Get your book distributed worldwide through major retailers and platforms.",
                features: ["Amazon KDP", "IngramSpark", "Barnes & Noble", "International Distribution"],
              },
              {
                icon: BookOpen,
                title: "ISBN & Copyright",
                description: "Complete registration services for your book's legal and commercial requirements.",
                features: ["ISBN Registration", "Copyright Filing", "Barcode Creation", "Legal Compliance"],
              },
              {
                icon: Star,
                title: "Quality Assurance",
                description: "Rigorous quality control to ensure your book meets professional standards.",
                features: ["Manuscript Review", "Design Approval", "Print Quality Check", "Final Proofing"],
              },
              {
                icon: Award,
                title: "Author Support",
                description: "Dedicated support throughout the entire publishing process.",
                features: ["Project Management", "Timeline Tracking", "Author Consultation", "Publishing Guidance"],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-indigo-50/30">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Publishing Packages */}
      <motion.section
        className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Publishing Packages</h2>
            <p className="text-xl opacity-90">Choose the perfect package for your publishing needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "$2,999",
                description: "Perfect for first-time authors",
                features: [
                  "Professional Editing",
                  "Cover Design",
                  "Interior Formatting",
                  "ISBN Registration",
                  "Amazon KDP Setup",
                  "Basic Distribution",
                ],
              },
              {
                name: "Professional",
                price: "$4,999",
                description: "Comprehensive publishing solution",
                features: [
                  "All Essential Features",
                  "Enhanced Editing",
                  "Premium Cover Design",
                  "Global Distribution",
                  "Marketing Materials",
                  "Author Website",
                ],
                popular: true,
              },
              {
                name: "Premium",
                price: "$7,999",
                description: "Complete publishing & marketing",
                features: [
                  "All Professional Features",
                  "Audiobook Production",
                  "Advanced Marketing",
                  "PR Campaign",
                  "Book Trailer",
                  "Dedicated Manager",
                ],
              },
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${pkg.popular ? "ring-4 ring-yellow-400 scale-105" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-400 text-black text-sm px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <div className="text-4xl font-bold">{pkg.price}</div>
                  <p className="opacity-90">{pkg.description}</p>
                  <ul className="space-y-2 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-white text-indigo-600 hover:bg-gray-100">
                    <Link href="/contact">Choose Package</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
