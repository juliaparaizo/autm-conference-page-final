import { Header } from "@/components/header"
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
      <EventDetails />
      <PanelSpeakers />
      <WhitepaperSignup />
      <ContactSection />
      <VideoSection />
      <Footer />
    </main>
  )
}
