import { Cpu, Network, Users, Target } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function InfoSection() {
  const infoCards = [
    {
      icon: Cpu,
      title: "Theme & Focus",
      description:
        "Building connected AI solutions leveraging the Model Context Protocol (MCP) to enable seamless interoperability between AI models and external systems.",
    },
    {
      icon: Network,
      title: "Domains",
      description: "Fintech, SaaS, Developer Ecosystems, Productivity, and Cloud Infrastructure.",
    },
    {
      icon: Users,
      title: "Target Audience",
      description: "Open to PES University students and enthusiastic developers from other colleges.",
    },
    {
      icon: Target,
      title: "Team Structure",
      description: "40 teams, 4 members each. Collaborate, innovate, and build the future of AI.",
    },
  ]

  return (
    <section id="info" className="py-24 bg-gradient-to-br from-black via-orange-950/20 to-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-balance">
              <span className="text-primary orange-glow">About Agentathon</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-balance">
              Join us for an intensive 30-hour hackathon focused on building the next generation of AI-powered
              applications using <span className="text-primary font-semibold">MCP</span> and{" "}
              <span className="text-primary font-semibold">Agentic AI</span>.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6">
            {infoCards.map((card, index) => {
              const Icon = card.icon
              return (
                <FadeInSection key={index} delay={index * 100}>
                  <div
                    className="liquid-glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] border-primary/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-primary">{card.title}</h3>
                        <p className="text-white/70 leading-relaxed">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
