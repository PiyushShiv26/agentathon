import DynamicIslandHeader from "@/components/dynamic-island-header"
import HeroSection from "@/components/hero-section"
import InfoSection from "@/components/info-section"
import FeaturesSection from "@/components/features-section"
import TimelineSection from "@/components/timeline-section"
import PrizesSection from "@/components/prizes-section"
import RegistrationSection from "@/components/registration-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <DynamicIslandHeader />
      <HeroSection />
      <InfoSection />
      <FeaturesSection />
      <TimelineSection />
      <PrizesSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
