"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, TrendingUp, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const serviceCategories = [
    {
      title: "Paid Advertising",
      items: [
        { name: "Google Ads & PPC", href: "/services/google-ads" },
        { name: "Meta Ads (Facebook & Instagram)", href: "/services/meta-ads" },
        { name: "YouTube Marketing", href: "/services/youtube-marketing" },
      ],
    },
    {
      title: "Publishing Services",
      items: [
        { name: "Book Publishing", href: "/services/book-publishing" },
        { name: "Book Marketing", href: "/services/book-marketing" },
      ],
    },
    {
      title: "E-commerce & Social",
      items: [
        { name: "Amazon Marketing", href: "/services/amazon-marketing" },
        { name: "Shopify Marketing", href: "/services/shopify-marketing" },
        { name: "Social Media Marketing", href: "/services/social-media" },
      ],
    },
  ]

  return (
    <motion.header
      className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Hammad Marketing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-lg font-medium transition-colors hover:text-purple-600 ${
                  pathname === item.href ? "text-purple-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 p-4">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <div className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-2 px-2">
                      {category.title}
                    </div>
                    {category.items.map((service) => (
                      <DropdownMenuItem key={service.name} asChild>
                        <Link href={service.href} className="w-full px-2 py-2 hover:bg-purple-50 rounded-md">
                          {service.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    {index < serviceCategories.length - 1 && <DropdownMenuSeparator className="my-2" />}
                  </div>
                ))}
                <DropdownMenuSeparator className="my-2" />
                <DropdownMenuItem asChild>
                  <Link
                    href="/services"
                    className="w-full px-2 py-2 font-semibold text-purple-600 hover:bg-purple-50 rounded-md"
                  >
                    View All Services →
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-xl font-medium transition-colors hover:text-purple-600 ${
                      pathname === item.href ? "text-purple-600" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="space-y-4">
                  <div className="text-xl font-medium text-gray-700">Services</div>
                  {serviceCategories.map((category) => (
                    <div key={category.title} className="ml-4 space-y-2">
                      <div className="font-semibold text-sm text-gray-500 uppercase tracking-wide">
                        {category.title}
                      </div>
                      {category.items.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-gray-600 hover:text-purple-600 transition-colors ml-2"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 mt-8"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
