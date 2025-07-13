"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'; // Import toast for notifications
import { backendUrl } from "@/config/config"

// Define the initial state for the form fields
const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  genre: '',
  message: '',
};

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

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true

    try {
      await axios.post(`${backendUrl}/contact`, formData);
      setIsSubmitted(true);
      setFormData(initialFormState); // Clear the form fields
      toast.success('Message sent successfully!'); // Show success toast
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.'); // Show error toast
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div className="text-center space-y-8" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="space-y-4">
              <Badge className="text-lg px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600">Contact Us</Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Let's Bring Your Book to Life
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ready to start your publishing journey? Get in touch for a free consultation and custom quote.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-gray-800">Get Your Free Quote</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In</Label>
                      <Select name="service" value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="publishing">Book Publishing</SelectItem>
                          <SelectItem value="marketing">Book Marketing</SelectItem>
                          <SelectItem value="both">Publishing + Marketing</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="genre">Book Genre</Label>
                      <Select name="genre" value={formData.genre} onValueChange={(value) => setFormData({ ...formData, genre: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your book genre" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fiction">Fiction</SelectItem>
                          <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                          <SelectItem value="romance">Romance</SelectItem>
                          <SelectItem value="mystery">Mystery/Thriller</SelectItem>
                          <SelectItem value="fantasy">Fantasy/Sci-Fi</SelectItem>
                          <SelectItem value="business">Business</SelectItem>
                          <SelectItem value="self-help">Self-Help</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Project</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Describe your book, your goals, and any specific questions you have..." className="min-h-[120px]" required />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full text-lg py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      disabled={loading} // Disable button when loading
                    >
                      {loading ? 'Submitting...' : (isSubmitted ? 'Message Sent!' : 'Send Message')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're here to help you every step of the way. Whether you have questions about our services, need a
                  custom quote, or want to discuss your project, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    content: "contact@hammadmarketing.com",
                    description: "Send us an email anytime",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    content: "+92 332 3421049",
                    description: "Mon-Fri, 9AM-6PM EST",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    content: "Lahore, Punjab, Pakistan",
                    description: "By appointment only",
                  },
                  {
                    icon: Clock,
                    title: "Response Time",
                    content: "Within 24 hours",
                    description: "We respond to all inquiries quickly",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-white/50 backdrop-blur-sm rounded-2xl hover:bg-white/70 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                      <p className="text-purple-600 font-medium">{item.content}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* FAQ Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Quick Questions?</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">How long does the publishing process take?</h4>
                    <p className="text-sm opacity-90">Typically 4-8 weeks depending on the services selected.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Do you work with all genres?</h4>
                    <p className="text-sm opacity-90">
                      Yes! We have experience with fiction, non-fiction, and specialized genres.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">What's included in the free consultation?</h4>
                    <p className="text-sm opacity-90">
                      A 30-minute call to discuss your project, goals, and custom recommendations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ToastContainer /> {/* Add ToastContainer here */}
    </div>
  )
}
