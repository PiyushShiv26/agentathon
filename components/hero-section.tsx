import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import TextReveal from "@/components/text-reveal"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-black via-orange-950/20 to-black"
    >
      <div className="absolute inset-0 hex-pattern" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/30 to-black/85" />
      {/* soft spotlight to increase contrast around the headline */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(900px_460px_at_50%_42%,rgba(255,255,255,0.16),transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wide animate-fade-in">Encode AI Presents</p>
            <h1 className="text-6xl md:text-8xl font-bold text-balance leading-tight animate-fade-in-up">
              <span className="text-primary orange-glow">Agentathon</span>
            </h1>
            <div className="space-y-3">
              <TextReveal 
                text="India's First MCP + Agent Hackathon"
                className="mx-auto max-w-4xl text-3xl md:text-4xl font-extrabold tracking-tight text-primary drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
                delay={300}
              />
              {/* underline glow for emphasis */}
              <div className="mx-auto h-[3px] w-48 md:w-64 rounded-full bg-linear-to-r from-transparent via-orange-400/70 to-transparent blur-[1px]" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary/90">November 8-9, 2025</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-primary/50" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-semibold text-primary/90">13th Floor Library, PES University</span>
            </div>
          </div>

          <div className="pt-4">
            <p className="font-semibold text-xl text-primary/70 mb-8">24 Hours of Hacking • ₹50,000 Prize Pool</p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://forms.gle/gYVheLogyZCHaQhG7" target="_blank" rel="noopener noreferrer">Register Your Team Now</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
