import { Lightbulb, Code2, Sparkles } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function FeaturesSection() {
  const features = [
    {
      icon: Lightbulb,
      title: "Impact & Usefulness",
      description: "Main Focus",
      detail: "Build solutions that solve real-world problems and create meaningful impact.",
    },
    {
      icon: Code2,
      title: "Technical Implementation",
      description: "Code Quality",
      detail: "Demonstrate strong technical skills and clean, scalable architecture.",
    },
    {
      icon: Sparkles,
      title: "Originality & Innovation",
      description: "Creative Solutions",
      detail: "Push boundaries with unique approaches and innovative thinking.",
    },
  ]

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-neutral-800/40 via-neutral-900 to-neutral-950">
      {/* subtle lighting to avoid pure black bottom while keeping the split look */}
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(1200px_600px_at_50%_-10%,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-primary orange-glow">Key Features</h2>
            <p className="text-xl text-primary/70 max-w-2xl mx-auto text-balance">
              Expert mentorship and comprehensive support throughout your hackathon journey
            </p>
          </FadeInSection>

          <FadeInSection className="mb-16" delay={200}>
            <div className="liquid-glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                <span className="text-primary">Mentorship</span>
              </h3>
              <p className="text-white/80 leading-relaxed text-lg">
                Expert mentors from partnering companies available to guide you on AI integration, building Agents & MCP
                Servers, and multi-service orchestrators. Get real-time support and industry insights throughout the
                hackathon.
              </p>
            </div>
          </FadeInSection>

          <div>
            <FadeInSection>
              <h3 className="text-3xl font-bold mb-8 text-center text-white">Scoring Criteria</h3>
            </FadeInSection>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <FadeInSection key={index} delay={index * 150}>
                    <div
                      className="liquid-glass rounded-2xl p-8 text-center hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="inline-flex p-4 rounded-2xl bg-white/10 border border-white/20 mb-4 shadow-[0_0_0_3px_rgba(255,255,255,0.02)_inset]">
                        <Icon className="w-8 h-8 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-white">{feature.title}</h4>
                      <p className="text-white/80 text-sm font-medium mb-3">{feature.description}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{feature.detail}</p>
                    </div>
                  </FadeInSection>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
