"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import axios from 'axios'
import { toast } from 'react-toastify'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { backendUrl } from "@/config/config"

interface MiniContactFormProps {
  heading: string;
  paragraph: React.ReactNode; // Changed to React.ReactNode
  initialService?: string;
  hideServiceSelect?: boolean;
}

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  genre: '', // Keeping genre for backend consistency, but not rendering it by default
  message: '',
};

export default function MiniContactForm({ heading, paragraph, initialService, hideServiceSelect = false }: MiniContactFormProps) {
  const [formData, setFormData] = useState({
    ...initialFormState,
    service: initialService || '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(`${backendUrl}/contact`, formData);
      setIsSubmitted(true);
      setFormData(prev => ({
        ...initialFormState,
        service: initialService || '', // Reset to initial service or empty
      }));
      toast.success('Message sent successfully!');
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Left Side: Heading & Paragraph */}
          <div className="text-center lg:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {heading}
            </h2>
            <div className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {paragraph} {/* Now renders as React.ReactNode */}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-purple-50/30">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Get Your Free Quote</CardTitle>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 text-left"> {/* Added text-left here */}
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
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" />
                </div>

                {!hideServiceSelect && (
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Interested In</Label>
                    <Select name="service" value={formData.service} onValueChange={(value) => handleSelectChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="publishing">Book Publishing</SelectItem>
                        <SelectItem value="marketing">Book Marketing</SelectItem>
                        <SelectItem value="amazon-marketing">Amazon Marketing</SelectItem>
                        <SelectItem value="google-ads">Google Ads</SelectItem>
                        <SelectItem value="meta-ads">Meta Ads</SelectItem>
                        <SelectItem value="social-media">Social Media Marketing</SelectItem>
                        <SelectItem value="seo">SEO</SelectItem>
                        <SelectItem value="shopify-marketing">Shopify Marketing</SelectItem>
                        <SelectItem value="youtube-ads">YouTube Ads</SelectItem>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or inquiry..." className="min-h-[100px]" required />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-md py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : (isSubmitted ? 'Message Sent!' : 'Send Message')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 