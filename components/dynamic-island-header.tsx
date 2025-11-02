"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function DynamicIslandHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#info", label: "Agentathon Info" },
    { href: "#timeline", label: "Timeline" },
    { href: "#prizes", label: "Prizes" },
    { href: "#contact", label: "Contact Us" },
  ]

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4">
      <nav
        className={`enhanced-glass rounded-full px-8 py-4 transition-all duration-500 border border-white/10 ${
          scrolled 
            ? "shadow-2xl shadow-primary/30 backdrop-blur-2xl bg-black/40" 
            : "backdrop-blur-xl bg-black/30"
        }`}
      >
        <ul className="flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-medium text-white/90 hover:text-primary transition-all duration-300 hover:scale-110 inline-block group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 -z-0 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 blur-sm"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
