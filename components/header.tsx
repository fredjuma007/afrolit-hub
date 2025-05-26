"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-orange-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <BookOpen className="h-7 w-7 lg:h-8 lg:w-8 text-orange-600" />
            <Link href="/" className="text-xl lg:text-2xl font-bold text-orange-900 hover:text-orange-600 transition-colors">
              AfrolitHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-orange-800 hover:text-orange-600 font-medium transition-colors">
              How It Works
            </Link>
            <Link href="#for-readers" className="text-orange-800 hover:text-orange-600 font-medium transition-colors">
              For Readers
            </Link>
            <Link href="#pricing" className="text-orange-800 hover:text-orange-600 font-medium transition-colors">
              Pricing
            </Link>
            <Link href="#about" className="text-orange-800 hover:text-orange-600 font-medium transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" className="text-orange-800 hover:text-orange-600">
              Sign In
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-orange-600 hover:text-orange-700 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-orange-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#how-it-works"
                className="text-orange-800 hover:text-orange-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#for-readers"
                className="text-orange-800 hover:text-orange-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                For Readers
              </Link>
              <Link
                href="#pricing"
                className="text-orange-800 hover:text-orange-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="text-orange-800 hover:text-orange-600 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex flex-col space-y-3 pt-4 border-t border-orange-200">
                <Button variant="ghost" className="text-orange-800 hover:text-orange-600 justify-start">
                  Sign In
                </Button>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white justify-start">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
