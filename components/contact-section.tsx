"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
    alert("Thank you for your inquiry! We will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-br from-black via-orange-950/20 to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-white">
              Get in <span className="text-primary orange-glow">Touch</span>
            </h2>
            <p className="text-xl text-white/70">Have questions? We'd love to hear from you.</p>
          </FadeInSection>

          <FadeInSection delay={200}>
            <form onSubmit={handleSubmit} className="liquid-glass rounded-2xl p-8 space-y-6 border-primary/20">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background/50 border-primary/30 focus:border-primary text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background/50 border-primary/30 focus:border-primary text-white placeholder:text-white/40"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background/50 border-primary/30 focus:border-primary resize-none text-white placeholder:text-white/40"
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl">
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
          </FadeInSection>

          <FadeInSection delay={400}>
            <div className="mt-8 text-center">
              <p className="text-white/70">
                Or reach us directly at{" "}
                <a href="mailto:encodeai@pes.edu" className="text-primary hover:underline">
                  encodeai@pes.edu
                </a>
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
