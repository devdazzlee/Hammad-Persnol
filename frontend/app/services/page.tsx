"use client"

import { motion } from "framer-motion"
import {
  Search,
  Share2,
  TrendingUp,
  BarChart3,
  BookOpen,
  Smartphone,
  Target,
  Eye,
  MousePointer,
  Users,
  Globe,
  Mail,
  Video,
  Camera,
  CheckCircle,
  ArrowRight,
  Award,
  Zap,
  Shield,
  Clock,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ServicesPage() {
  const paidAdvertisingServices = [
    {
      icon: Search,
      title: "Google Ads & PPC Management",
      description:
        "Maximize your ROI with expertly managed Google Ads campaigns. We handle everything from keyword research to bid optimization.",
      features: [
        "Search Campaigns",
        "Display Advertising",
        "Shopping Campaigns",
        "YouTube Ads",
        "Performance Max",
        "Local Service Ads",
        "Keyword Research & Analysis",
        "Ad Copy Creation & Testing",
        "Landing Page Optimization",
        "Conversion Tracking Setup",
        "Bid Management & Optimization",
        "Competitor Analysis",
      ],
      pricing: "Starting at $1,500/month + ad spend",
      results: "Average 300% ROI increase",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Share2,
      title: "Meta Ads (Facebook & Instagram)",
      description:
        "Reach your ideal customers on Facebook and Instagram with compelling ad creatives and precise audience targeting.",
      features: [
        "Facebook Feed Ads",
        "Instagram Story Ads",
        "Messenger Advertising",
        "Audience Network Ads",
        "Video & Carousel Ads",
        "Lead Generation Campaigns",
        "Custom Audience Creation",
        "Lookalike Audience Development",
        "Creative Design & Testing",
        "Pixel Setup & Optimization",
        "Retargeting Campaigns",
        "E-commerce Catalog Integration",
      ],
      pricing: "Starting at $1,200/month + ad spend",
      results: "Average 250% engagement increase",
      color: "from-blue-600 to-purple-600",
    },
    {
      icon: Video,
      title: "YouTube Advertising",
      description: "Capture attention with engaging video ads on the world's second-largest search engine.",
      features: [
        "TrueView In-Stream Ads",
        "Discovery Ads",
        "Bumper Ads",
        "Masthead Campaigns",
        "Video Action Campaigns",
        "YouTube Shorts Ads",
        "Video Production Support",
        "Audience Targeting",
        "Remarketing Lists",
        "Custom Intent Audiences",
        "Performance Optimization",
        "Analytics & Reporting",
      ],
      pricing: "Starting at $1,000/month + ad spend",
      results: "Average 180% view rate improvement",
      color: "from-red-600 to-pink-600",
    },
    {
      icon: Users,
      title: "LinkedIn Advertising",
      description: "Connect with professionals and decision-makers through targeted LinkedIn advertising campaigns.",
      features: [
        "Sponsored Content",
        "Message Ads",
        "Dynamic Ads",
        "Text Ads",
        "Event Ads",
        "Lead Gen Forms",
        "Professional Targeting",
        "Company Targeting",
        "Job Title Targeting",
        "Industry Targeting",
        "Account-Based Marketing",
        "B2B Lead Generation",
      ],
      pricing: "Starting at $1,800/month + ad spend",
      results: "Average 200% B2B lead increase",
      color: "from-blue-700 to-indigo-600",
    },
  ]

  const digitalMarketingServices = [
    {
      icon: BarChart3,
      title: "SEO & Content Marketing",
      description:
        "Improve your organic search visibility and attract qualified traffic with comprehensive SEO strategies.",
      features: [
        "Technical SEO Audit",
        "Keyword Research & Strategy",
        "On-Page Optimization",
        "Content Creation & Optimization",
        "Link Building Campaigns",
        "Local SEO Optimization",
        "Site Speed Optimization",
        "Mobile SEO",
        "Schema Markup Implementation",
        "Competitor Analysis",
        "Content Calendar Development",
        "Blog Writing & Management",
      ],
      pricing: "Starting at $2,000/month",
      results: "Average 150% organic traffic increase",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      title: "Social Media Marketing",
      description: "Build your brand presence and engage with your audience across all major social media platforms.",
      features: [
        "Social Media Strategy",
        "Content Creation & Curation",
        "Community Management",
        "Influencer Partnerships",
        "Social Media Advertising",
        "Brand Monitoring",
        "Hashtag Research & Strategy",
        "Social Media Analytics",
        "Contest & Campaign Management",
        "User-Generated Content",
        "Crisis Management",
        "Platform-Specific Optimization",
      ],
      pricing: "Starting at $1,500/month",
      results: "Average 300% engagement increase",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and drive conversions with personalized email marketing campaigns and automation.",
      features: [
        "Email Campaign Design",
        "Marketing Automation",
        "Drip Campaign Setup",
        "List Segmentation",
        "A/B Testing",
        "Personalization",
        "Welcome Series",
        "Abandoned Cart Recovery",
        "Newsletter Management",
        "Email Template Design",
        "Deliverability Optimization",
        "Performance Analytics",
      ],
      pricing: "Starting at $800/month",
      results: "Average 25% open rate improvement",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Camera,
      title: "Influencer Marketing",
      description:
        "Leverage the power of influencers to expand your reach and build authentic connections with your audience.",
      features: [
        "Influencer Research & Vetting",
        "Campaign Strategy Development",
        "Contract Negotiation",
        "Content Collaboration",
        "Performance Tracking",
        "ROI Measurement",
        "Micro-Influencer Campaigns",
        "Macro-Influencer Partnerships",
        "Brand Ambassador Programs",
        "Content Rights Management",
        "Campaign Optimization",
        "Relationship Management",
      ],
      pricing: "Starting at $2,500/month",
      results: "Average 400% reach expansion",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  const ecommerceServices = [
    {
      icon: Smartphone,
      title: "Amazon Marketing & PPC",
      description: "Dominate Amazon marketplace with optimized product listings and strategic advertising campaigns.",
      features: [
        "Amazon PPC Management",
        "Product Listing Optimization",
        "Keyword Research",
        "Sponsored Products Ads",
        "Sponsored Brands Ads",
        "Sponsored Display Ads",
        "Amazon SEO",
        "Competitor Analysis",
        "Review Management",
        "Brand Store Creation",
        "A+ Content Creation",
        "Inventory Management Support",
      ],
      pricing: "Starting at $1,500/month + ad spend",
      results: "Average 200% sales increase",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Globe,
      title: "Shopify Marketing",
      description:
        "Optimize your Shopify store for maximum conversions and implement growth-focused marketing strategies.",
      features: [
        "Store Optimization",
        "Conversion Rate Optimization",
        "Email Marketing Integration",
        "Social Media Integration",
        "Google Shopping Setup",
        "Facebook Shop Integration",
        "Abandoned Cart Recovery",
        "Product Recommendation Engine",
        "Customer Retention Campaigns",
        "Loyalty Program Setup",
        "Analytics & Reporting",
        "Multi-Channel Marketing",
      ],
      pricing: "Starting at $1,200/month",
      results: "Average 180% conversion improvement",
      color: "from-green-600 to-blue-600",
    },
    {
      icon: BookOpen,
      title: "Complete Book Publishing Services",
      description:
        "End-to-end book publishing solutions from manuscript to bestseller. We handle every aspect of the publishing process with professional quality and global distribution.",
      features: [
        "Comprehensive Manuscript Assessment",
        "Developmental Editing & Story Structure",
        "Professional Copy Editing & Proofreading",
        "Line Editing & Style Enhancement",
        "Custom Cover Design (Multiple Concepts)",
        "Professional Interior Formatting",
        "Print & Digital Layout Design",
        "ISBN Registration & Copyright",
        "Barcode Creation & Assignment",
        "Global Distribution Network",
        "Amazon KDP Publishing",
        "IngramSpark Print Distribution",
        "Barnes & Noble Publishing",
        "Apple Books Distribution",
        "Google Play Books",
        "Kobo & Other E-book Platforms",
        "Print-on-Demand Setup",
        "Hardcover & Paperback Options",
        "E-book Conversion (EPUB, MOBI)",
        "Audiobook Production Coordination",
        "Author Website Creation",
        "Professional Author Bio Writing",
        "Book Trailer Production",
        "Publishing Timeline Management",
        "Rights & Royalty Management",
        "International Distribution",
        "Library Distribution Programs",
        "Wholesale Distribution Setup",
      ],
      pricing: "Complete Package: $3,500 - $8,500",
      results: "500+ books published successfully",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Target,
      title: "Strategic Book Marketing & Promotion",
      description:
        "Comprehensive book marketing campaigns designed to maximize visibility, drive sales, and establish your author brand. From pre-launch buzz to bestseller campaigns.",
      features: [
        "Pre-Launch Marketing Strategy",
        "Book Launch Campaign Management",
        "Amazon Optimization & SEO",
        "Amazon Advertising (Sponsored Products)",
        "Amazon Sponsored Brands Campaigns",
        "Amazon Sponsored Display Ads",
        "Kindle Unlimited Optimization",
        "BookBub Featured Deal Applications",
        "Goodreads Marketing Campaigns",
        "Social Media Marketing Strategy",
        "Facebook & Instagram Book Ads",
        "Twitter/X Marketing Campaigns",
        "TikTok BookTok Marketing",
        "YouTube Book Trailer Promotion",
        "Pinterest Visual Marketing",
        "LinkedIn Author Platform Building",
        "Professional Press Release Writing",
        "Media Kit Creation & Distribution",
        "Podcast Interview Booking",
        "Radio Interview Coordination",
        "Book Review Campaign Management",
        "Influencer & Blogger Outreach",
        "Book Club Outreach Programs",
        "Library Marketing Campaigns",
        "Bookstore Partnership Development",
        "Book Fair & Event Coordination",
        "Virtual Book Tour Organization",
        "Author Speaking Engagement Booking",
        "Email Marketing for Authors",
        "Newsletter Setup & Management",
        "Author Website SEO Optimization",
        "Content Marketing Strategy",
        "Blog Tour Coordination",
        "Award Submission Strategy",
        "Bestseller List Campaign Strategy",
        "International Marketing Expansion",
        "Translation & Foreign Rights Support",
        "Book Series Marketing Strategy",
        "Cross-Promotion Opportunities",
        "Fan Base Building & Engagement",
      ],
      pricing: "Marketing Packages: $2,500 - $15,000/month",
      results: "Average 400% visibility increase, 50+ bestsellers created",
      color: "from-purple-600 to-pink-600",
    },
  ]

  const analyticsServices = [
    {
      icon: Eye,
      title: "Conversion Rate Optimization",
      description:
        "Maximize your website's potential by optimizing every element for higher conversion rates and better user experience.",
      features: [
        "Website Audit & Analysis",
        "User Experience Testing",
        "A/B Testing Implementation",
        "Landing Page Optimization",
        "Funnel Analysis",
        "Heat Map Analysis",
        "User Session Recording",
        "Form Optimization",
        "Mobile Optimization",
        "Page Speed Optimization",
        "Trust Signal Implementation",
        "Checkout Process Optimization",
      ],
      pricing: "Starting at $2,000/month",
      results: "Average 45% conversion improvement",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: BarChart3,
      title: "Marketing Analytics & Reporting",
      description:
        "Make data-driven decisions with comprehensive analytics, tracking, and detailed performance reporting.",
      features: [
        "Google Analytics Setup",
        "Custom Dashboard Creation",
        "Goal & Event Tracking",
        "Attribution Modeling",
        "ROI Analysis",
        "Performance Reporting",
        "Data Visualization",
        "Competitor Benchmarking",
        "Marketing Mix Modeling",
        "Customer Journey Analysis",
        "Predictive Analytics",
        "Automated Reporting",
      ],
      pricing: "Starting at $1,000/month",
      results: "100% data-driven decision making",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: MousePointer,
      title: "Landing Page Design & Development",
      description:
        "Create high-converting landing pages that turn visitors into customers with compelling design and optimization.",
      features: [
        "Custom Landing Page Design",
        "Mobile-Responsive Development",
        "A/B Testing Setup",
        "Conversion Optimization",
        "Form Integration",
        "Analytics Implementation",
        "Speed Optimization",
        "SEO Optimization",
        "Lead Capture Forms",
        "Thank You Page Setup",
        "Multi-Variant Testing",
        "Performance Monitoring",
      ],
      pricing: "Starting at $1,500 per page",
      results: "Average 60% conversion improvement",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Marketing Automation",
      description:
        "Streamline your marketing processes with intelligent automation that nurtures leads and drives conversions.",
      features: [
        "Workflow Automation",
        "Lead Scoring Setup",
        "Email Automation",
        "CRM Integration",
        "Behavioral Triggers",
        "Personalization Engine",
        "Multi-Channel Automation",
        "Customer Segmentation",
        "Lifecycle Marketing",
        "Abandoned Cart Recovery",
        "Win-Back Campaigns",
        "Performance Optimization",
      ],
      pricing: "Starting at $1,800/month",
      results: "Average 250% efficiency increase",
      color: "from-yellow-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center space-y-8"
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <Badge className="text-lg px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                Complete Marketing Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent leading-tight">
                Comprehensive Digital Marketing Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                From Google Ads and Meta campaigns to book publishing and e-commerce optimization - we provide
                end-to-end marketing solutions that drive real results for your business.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              {[
                "Google Ads Certified",
                "Meta Business Partner",
                "Amazon Advertising Expert",
                "HubSpot Certified",
                "Shopify Plus Partner",
              ].map((badge, index) => (
                <Badge key={index} variant="outline" className="text-sm px-4 py-2 bg-white/50">
                  <Award className="w-4 h-4 mr-2" />
                  {badge}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="paid-advertising" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-white/50 backdrop-blur-sm p-2 rounded-2xl">
              <TabsTrigger value="paid-advertising" className="text-sm md:text-base py-3 rounded-xl">
                Paid Advertising
              </TabsTrigger>
              <TabsTrigger value="digital-marketing" className="text-sm md:text-base py-3 rounded-xl">
                Digital Marketing
              </TabsTrigger>
              <TabsTrigger value="ecommerce" className="text-sm md:text-base py-3 rounded-xl">
                E-commerce & Publishing
              </TabsTrigger>
              <TabsTrigger value="analytics" className="text-sm md:text-base py-3 rounded-xl">
                Analytics & Optimization
              </TabsTrigger>
            </TabsList>

            {/* Paid Advertising Services */}
            <TabsContent value="paid-advertising" className="space-y-12">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Paid Advertising Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Drive immediate results with expertly managed paid advertising campaigns across all major platforms
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {paidAdvertisingServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
                      <CardHeader className="pb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4`}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-gray-800">{service.title}</CardTitle>
                        <div className="flex items-center gap-4">
                          <div className="text-lg font-bold text-purple-600">{service.pricing}</div>
                          <Badge className="bg-green-100 text-green-800">{service.results}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Digital Marketing Services */}
            <TabsContent value="digital-marketing" className="space-y-12">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Digital Marketing Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Build your brand and engage your audience with comprehensive digital marketing strategies
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {digitalMarketingServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
                      <CardHeader className="pb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4`}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-gray-800">{service.title}</CardTitle>
                        <div className="flex items-center gap-4">
                          <div className="text-lg font-bold text-purple-600">{service.pricing}</div>
                          <Badge className="bg-green-100 text-green-800">{service.results}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* E-commerce & Publishing Services */}
            <TabsContent value="ecommerce" className="space-y-12">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
                  E-commerce & Publishing Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Specialized services for online stores, Amazon sellers, and authors looking to publish and market
                  their books
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {ecommerceServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
                      <CardHeader className="pb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4`}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-gray-800">{service.title}</CardTitle>
                        <div className="flex items-center gap-4">
                          <div className="text-lg font-bold text-purple-600">{service.pricing}</div>
                          <Badge className="bg-green-100 text-green-800">{service.results}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Analytics & Optimization Services */}
            <TabsContent value="analytics" className="space-y-12">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                  Analytics & Optimization Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Make data-driven decisions and optimize your marketing performance with advanced analytics and testing
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8">
                {analyticsServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50/50">
                      <CardHeader className="pb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4`}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl text-gray-800">{service.title}</CardTitle>
                        <div className="flex items-center gap-4">
                          <div className="text-lg font-bold text-purple-600">{service.pricing}</div>
                          <Badge className="bg-green-100 text-green-800">{service.results}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Package Deals */}
      <motion.section
        className="py-20 px-4 md:px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete Marketing Packages</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Save money with our comprehensive packages that combine multiple services for maximum impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Growth Starter",
                price: "$2,500",
                originalPrice: "$3,500",
                description: "Perfect for small businesses getting started",
                features: [
                  "Google Ads Management",
                  "Facebook & Instagram Ads",
                  "Landing Page Creation",
                  "Basic Analytics Setup",
                  "Monthly Reporting",
                  "Email Support",
                ],
                savings: "Save $1,000",
              },
              {
                name: "Business Accelerator",
                price: "$5,000",
                originalPrice: "$7,000",
                description: "Comprehensive solution for growing businesses",
                features: [
                  "All Growth Starter Features",
                  "SEO & Content Marketing",
                  "Social Media Management",
                  "Email Marketing Automation",
                  "Conversion Rate Optimization",
                  "Weekly Strategy Calls",
                ],
                popular: true,
                savings: "Save $2,000",
              },
              {
                name: "Enterprise Solution",
                price: "$10,000",
                originalPrice: "$15,000",
                description: "Full-service marketing for large businesses",
                features: [
                  "All Business Accelerator Features",
                  "Multi-Platform Advertising",
                  "Advanced Analytics & Reporting",
                  "Marketing Automation",
                  "Dedicated Account Manager",
                  "24/7 Priority Support",
                ],
                savings: "Save $5,000",
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
                  <div className="space-y-2">
                    <div className="text-4xl font-bold">
                      {pkg.price}
                      <span className="text-lg">/month</span>
                    </div>
                    <div className="text-lg opacity-70 line-through">{pkg.originalPrice}/month</div>
                    <Badge className="bg-green-500 text-white">{pkg.savings}</Badge>
                  </div>
                  <p className="opacity-90">{pkg.description}</p>
                  <ul className="space-y-2 text-left">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-white text-purple-600 hover:bg-gray-100">
                    <Link href="/contact">Choose Package</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Our Services */}
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
              Why Choose MarketPro Agency?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine expertise, technology, and proven strategies to deliver exceptional results for your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Certified Experts",
                description: "Our team holds certifications from Google, Meta, Amazon, and other major platforms.",
              },
              {
                icon: Shield,
                title: "Proven Results",
                description: "Track record of generating over $50M in revenue for our clients across all industries.",
              },
              {
                icon: Clock,
                title: "Fast Implementation",
                description: "Get your campaigns live within 48 hours with our streamlined onboarding process.",
              },
              {
                icon: Lightbulb,
                title: "Custom Strategies",
                description: "Every campaign is tailored to your specific business goals and target audience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 md:px-6"
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
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your goals and create a custom marketing strategy that drives real results for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Link href="/contact">
                  Get Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Request Custom Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
