import { Youtube, Linkedin, Instagram } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function Footer() {
  return (
    <footer id="contact" className="py-12 bg-linear-to-br from-black via-orange-950/20 to-black border-t border-primary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="liquid-glass rounded-2xl p-8 border-primary/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    <span className="text-primary orange-glow">Encode AI</span>
                  </h3>
                  <p className="text-white/70">PESU Student Club dedicated to AIML</p>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://www.youtube.com/@EncodeAIPESU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/encodeai-pesu-25a2762b0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/encode.ai_pesu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/30 text-center">
                <p className="text-white/70">© 2025 Encode AI. All rights reserved.</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </footer>
  )
}