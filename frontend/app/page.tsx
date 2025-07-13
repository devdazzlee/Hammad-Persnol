"use client"

import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Star,
  CheckCircle,
  Target,
  BarChart3,
  Users,
  Award,
  Smartphone,
  Search,
  Eye,
  DollarSign,
  Clock,
  Lightbulb,
  Rocket,
  Heart,
  Share2,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MiniContactForm from "@/components/mini-contact-form" // Import the new component

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      {/* This section already has pt-32, which is good for clearing the fixed Navbar */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="space-y-4">
              <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                #1 Digital Marketing Agency
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Grow Your Business with
                <br />
                <span className="text-5xl md:text-7xl lg:text-8xl">Expert Marketing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From Google Ads & Facebook campaigns to book publishing & content marketing - we deliver results that
                matter. Transform your business with our comprehensive digital marketing solutions.
              </p>
            </motion.div>

            {/* Original CTA buttons removed from here. The MiniContactForm will be a separate section. */}

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6 pt-8">
              {[
                "Google Ads Certified",
                "Meta Business Partner",
                "Amazon Advertising Expert",
                "Publishing Specialist",
              ].map((badge, index) => (
                <Badge key={index} variant="outline" className="text-sm px-4 py-2 bg-white/50">
                  {badge}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dedicated MiniContactForm Section for the homepage hero call-to-action */}
      {/* We add a section with py-20 px-4 md:px-6 here to provide spacing for the form */}
      <section className="py-20 px-4 md:px-6">
        <MiniContactForm
          heading="Get Your Free Strategy Call"
          paragraph={
            <> {/* Use a React Fragment to group multiple paragraphs */}
              <p>
                Unlock your business's potential with a personalized marketing strategy. Fill out the form below to
                schedule a free, no-obligation consultation with our marketing experts.
              </p>
              <p className="mt-4">
                During this call, our expert team will meticulously analyze your current market position, identify
                key growth opportunities, and provide actionable insights tailored specifically to your business needs.
              </p>
              <p className="mt-4">
                We believe in transparency and delivering tangible results.
              </p>
              <p className="mt-4">
                Don't miss this invaluable opportunity to gain a competitive edge and transform your digital presence.
                Take the first step towards accelerated growth today by completing the brief form. We look forward to connecting with you!
              </p>
            </>
          }
          initialService="consultation"
          hideServiceSelect={true}
        />
      </section>

      {/* Stats Section */}
      <motion.section
        className="py-20 bg-white/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Trusted by 1000+ Businesses Worldwide</h2>
            <p className="text-xl text-gray-600">Results that speak for themselves</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "$50M+", label: "Revenue Generated", icon: DollarSign },
              { number: "1000+", label: "Successful Campaigns", icon: Target },
              { number: "98%", label: "Client Retention Rate", icon: Heart },
              { number: "24/7", label: "Support Available", icon: Clock },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-purple-600">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

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
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Complete Digital Marketing Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive marketing services to help your business thrive in the digital landscape. From paid
              advertising to content creation, we've got you covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Google Ads & PPC",
                description:
                  "Drive targeted traffic and maximize ROI with expertly managed Google Ads campaigns, search ads, display advertising, and shopping campaigns.",
                features: ["Search Campaigns", "Display Ads", "Shopping Ads", "YouTube Ads"],
                color: "from-red-500 to-orange-500",
              },
              {
                icon: Share2,
                title: "Meta Ads (Facebook & Instagram)",
                description:
                  "Reach your ideal customers on Facebook and Instagram with compelling ad creatives and precise targeting strategies.",
                features: ["Facebook Ads", "Instagram Ads", "Messenger Ads", "Audience Targeting"],
                color: "from-blue-600 to-purple-600",
              },
              {
                icon: TrendingUp,
                title: "Social Media Marketing",
                description:
                  "Build your brand presence across all social platforms with engaging content and community management.",
                features: ["Content Creation", "Community Management", "Influencer Marketing", "Social Strategy"],
                color: "from-pink-500 to-rose-500",
              },
              {
                icon: BarChart3,
                title: "SEO & Content Marketing",
                description:
                  "Improve your organic visibility and attract qualified leads with strategic SEO and valuable content.",
                features: ["Keyword Research", "On-Page SEO", "Content Strategy", "Link Building"],
                color: "from-green-500 to-teal-500",
              },
              {
                icon: BookOpen,
                title: "Book Publishing & Marketing",
                description:
                  "Complete book publishing services from manuscript to bestseller, including editing, design, and marketing.",
                features: ["Professional Editing", "Cover Design", "Amazon Marketing", "Book Launch"],
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: Smartphone,
                title: "E-commerce Marketing",
                description:
                  "Boost your online store sales with specialized e-commerce marketing strategies and conversion optimization.",
                features: ["Amazon PPC", "Shopify Marketing", "Product Listings", "Conversion Optimization"],
                color: "from-yellow-500 to-orange-500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50 group">
                  <CardContent className="p-0 space-y-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Link href="/services">
                Explore All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <motion.section
        className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Hammad Marketing?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We combine creativity, data-driven strategies, and cutting-edge technology to deliver exceptional results
              for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Expertise",
                description:
                  "5+ years of experience with certified professionals in Google Ads, Meta, and Amazon advertising.",
              },
              {
                icon: Target,
                title: "Data-Driven Results",
                description:
                  "Every campaign is optimized using advanced analytics and performance tracking for maximum ROI.",
              },
              {
                icon: Users,
                title: "Dedicated Support",
                description: "Your success is our priority. Get personalized support from our expert marketing team.",
              },
              {
                icon: Rocket,
                title: "Cutting-Edge Technology",
                description:
                  "We use the latest marketing tools and AI-powered solutions to stay ahead of the competition.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your marketing campaigns deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy & Analysis",
                description: "We analyze your business, competitors, and target audience to create a winning strategy.",
                icon: Lightbulb,
              },
              {
                step: "02",
                title: "Campaign Setup",
                description:
                  "Our experts set up optimized campaigns across your chosen platforms with precise targeting.",
                icon: Target,
              },
              {
                step: "03",
                title: "Launch & Monitor",
                description: "We launch your campaigns and continuously monitor performance for optimal results.",
                icon: Eye,
              },
              {
                step: "04",
                title: "Optimize & Scale",
                description: "Based on data insights, we optimize and scale successful campaigns for maximum growth.",
                icon: TrendingUp,
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-purple-50/30">
                  <CardContent className="p-0 space-y-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                        <process.icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-800">
                        {process.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{process.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{process.description}</p>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <motion.section
        className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Success stories from businesses that transformed their growth with our marketing expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "E-commerce Store Owner",
                company: "Fashion Boutique",
                content:
                  "Hammad Marketing increased our online sales by 300% in just 3 months with their Google Ads and Facebook campaigns. The ROI has been incredible!",
                rating: 5,
                result: "300% Sales Increase",
              },
              {
                name: "Michael Chen",
                role: "Author & Publisher",
                company: "Independent Author",
                content:
                  "They helped me publish my book and create a bestseller marketing campaign. Now I'm a #1 Amazon bestseller in my category!",
                rating: 5,
                result: "#1 Bestseller",
              },
              {
                name: "Emma Davis",
                role: "SaaS Founder",
                company: "TechStart Solutions",
                content:
                  "Our lead generation improved by 250% after working with Hammad Marketing. Their PPC expertise and landing page optimization are top-notch.",
                rating: 5,
                result: "250% More Leads",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="space-y-2">
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="opacity-80">{testimonial.role}</div>
                  <div className="text-sm opacity-70">{testimonial.company}</div>
                  <Badge className="bg-green-500 text-white mt-2">{testimonial.result}</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Industries We Serve */}
      <section className="py-20 px-4 md:px-6 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our marketing expertise spans across multiple industries, delivering tailored solutions for every business
              type
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "E-commerce",
              "SaaS",
              "Healthcare",
              "Real Estate",
              "Education",
              "Finance",
              "Publishing",
              "Restaurants",
              "Fitness",
              "Beauty",
              "Technology",
              "Consulting",
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-lg font-semibold text-gray-800">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (at the bottom) - this section already has py-20 and can remain as is */}
      <motion.section
        className="py-20 px-4 md:px-6" // This section already has py-20, so it's ready
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* The MiniContactForm itself should not have py-20, its parent section does */}
            <MiniContactForm
              heading="Ready to Accelerate Your Growth?"
              paragraph={
                <>
                  <p>
                    Join hundreds of successful businesses who chose Hammad Marketing to transform their digital presence
                    and achieve remarkable growth. We are committed to helping you reach your full potential in the competitive
                    digital landscape.
                  </p>
                  <p className="mt-4">
                    Your growth story starts with a single click. Whether you're looking for advanced digital advertising,
                    comprehensive book publishing, or expert social media management, our tailored solutions are designed
                    to deliver maximum ROI.
                  </p>
                  <p className="mt-4">
                    Let's build something amazing together. Take the first step towards a brighter, more profitable future
                    for your business. Contact us today to discuss your unique needs and how we can help you succeed.
                  </p>
                </>
              }
              hideServiceSelect={false}
            />

            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading brands worldwide</p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                {["Google Partner", "Meta Business", "Amazon Ads", "HubSpot", "Shopify Plus"].map((partner, index) => (
                  <div key={index} className="text-gray-400 font-medium">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
