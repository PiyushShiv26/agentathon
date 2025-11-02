import { Trophy, Award, Medal } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function PrizesSection() {
  const prizes = [
    {
      place: "1st Place",
      amount: "₹25,000",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      place: "2nd Place",
      amount: "₹15,000",
      icon: Award,
      color: "text-gray-400",
      bgColor: "bg-gray-400/10",
      borderColor: "border-gray-400/20",
    },
    {
      place: "3rd Place",
      amount: "₹10,000",
      icon: Medal,
      color: "text-orange-600",
      bgColor: "bg-orange-600/10",
      borderColor: "border-orange-600/20",
    },
  ]

  return (
    <section
      id="prizes"
      className="py-24 bg-gradient-to-br from-orange-950/30 via-black to-black relative overflow-hidden"
    >
      <div className="absolute inset-0 hex-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              <span className="text-primary orange-glow">Prizes</span>
            </h2>
            <p className="text-3xl font-bold text-white mb-2">Total Prize Pool</p>
            <p className="text-6xl font-bold text-primary orange-glow">₹50,000</p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {prizes.map((prize, index) => {
              const Icon = prize.icon
              return (
                <FadeInSection key={index} delay={index * 100}>
                  <div
                    className={`liquid-glass rounded-2xl p-8 text-center hover:scale-[1.05] transition-all duration-300 border-primary/30`}
                  >
                    <div className={`inline-flex p-4 rounded-2xl ${prize.bgColor} border ${prize.borderColor} mb-4`}>
                      <Icon className={`w-12 h-12 ${prize.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{prize.place}</h3>
                    <p className={`text-4xl font-bold ${prize.color} mb-4`}>{prize.amount}</p>
                  </div>
                </FadeInSection>
              )
            })}
          </div>

          <FadeInSection delay={300}>
            <div className="liquid-glass rounded-2xl p-8 border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-center text-white">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-lg font-semibold mb-2 text-white">Top 3 Teams</p>
                <p className="text-white/80">Hard copy Certificates of Appreciation</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-lg font-semibold mb-2 text-white">All Attendees</p>
                <p className="text-white/80">Soft copy Certificates of Participation</p>
              </div>
            </div>
          </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  )
}
