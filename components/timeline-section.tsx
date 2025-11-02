import { Clock } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function TimelineSection() {
  const timeline = {
    day1: [
      { time: "11:00-11:15", event: "Opening Ceremony" },
      { time: "11:15-11:30", event: "Sponsor & Partner Introductions" },
      { time: "11:30-12:00", event: "Teams Settle In & Begin Hacking" },
      { time: "12:00-17:00", event: "Deep Work Session" },
      { time: "17:00-18:00", event: "Snack Break" },
      { time: "18:00-19:00", event: "Games Hour (Icebreaker, Trivia, Mini Challenges)" },
      { time: "19:00-19:30", event: "Phase I Evaluation" },
      { time: "19:30-23:00", event: "Core Development" },
      { time: "23:00-00:00", event: "Late Dinner & Networking" },
      { time: "00:00-01:00", event: "Development Sprint" },
    ],
    day2: [
      { time: "01:00-01:45", event: "Phase II Evaluation" },
      { time: "01:45-03:00", event: "Development Sprint" },
      { time: "03:00-05:00", event: "Meme Challenge" },
      { time: "05:00-05:30", event: "Coffee Break" },
      { time: "05:30-07:00", event: "Final Polishing" },
      { time: "07:00-07:30", event: "Breakfast / Energy Break" },
      { time: "07:30-08:00", event: "Phase III Evaluation" },
      { time: "08:00-08:30", event: "Final Code Freeze & Submission" },
      { time: "08:30-11:00", event: "Final Polish & Wrap-up" },
    ],
    postHackathon: [
      { time: "11:00-12:30", event: "Final Presentations & Demos (7-8 min per team)" },
      { time: "12:30-13:00", event: "Judges Deliberation" },
      { time: "13:00-13:30", event: "Closing Ceremony" },
    ],
  }

  return (
    <section id="timeline" className="py-24 bg-gradient-to-br from-orange-950/20 via-black to-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white">
              <span className="text-primary orange-glow">Event Timeline</span>
            </h2>
            <p className="text-xl font-bold text-white/70">30 hours of non-stop innovation</p>
          </FadeInSection>

          <div className="space-y-12">
            {/* Day 1 */}
            <FadeInSection delay={100}>
              <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 rounded-full bg-primary text-white font-semibold">Day 1</div>
                <h3 className="text-2xl font-bold text-white">November 8, 2025</h3>
              </div>
              <div className="space-y-3">
                {timeline.day1.map((item, index) => (
                  <div
                    key={index}
                    className="liquid-glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-all duration-200 border-primary/20"
                  >
                    <div className="flex items-center gap-2 min-w-[140px]">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-mono text-white">{item.time}</span>
                    </div>
                    <div className="h-8 w-px bg-primary/30" />
                    <p className="text-white/90">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
            </FadeInSection>

            {/* Day 2 */}
            <FadeInSection delay={200}>
              <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 rounded-full bg-primary text-white font-semibold">Day 2</div>
                <h3 className="text-2xl font-bold text-white">November 9, 2025</h3>
              </div>
              <div className="space-y-3">
                {timeline.day2.map((item, index) => (
                  <div
                    key={index}
                    className="liquid-glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-all duration-200 border-primary/20"
                  >
                    <div className="flex items-center gap-2 min-w-[140px]">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-mono text-white">{item.time}</span>
                    </div>
                    <div className="h-8 w-px bg-primary/30" />
                    <p className="text-white/90">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
            </FadeInSection>

            {/* Post-Hackathon */}
            <FadeInSection delay={300}>
              <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="px-4 py-2 rounded-full bg-black text-white font-semibold">
                  Post-Hackathon
                </div>
                <h3 className="text-2xl font-bold text-white">Final Events</h3>
              </div>
              <div className="space-y-3">
                {timeline.postHackathon.map((item, index) => (
                  <div
                    key={index}
                    className="liquid-glass rounded-xl p-4 flex items-center gap-4 hover:border-primary/50 transition-all duration-200 border-primary/20"
                  >
                    <div className="flex items-center gap-2 min-w-[140px]">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm font-mono text-white">{item.time}</span>
                    </div>
                    <div className="h-8 w-px bg-primary/30" />
                    <p className="text-white/90">{item.event}</p>
                  </div>
                ))}
              </div>
            </div>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  )
}
