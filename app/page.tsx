import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EventDetails } from "@/components/event-details"
import { PanelSpeakers } from "@/components/panel-speakers"
import { VideoSection } from "@/components/video-section"
import { WhitepaperSignup } from "@/components/whitepaper-signup"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function AUTMConferencePage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Header />
      <HeroSection />
      <EventDetails />
      <PanelSpeakers />
      <VideoSection />
      <WhitepaperSignup />
      <ContactSection />
      <Footer />
    </main>
  )
}
