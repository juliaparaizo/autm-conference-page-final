"use client"

import { useState } from "react"
import { MapPin, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

type Speaker = {
  name: string
  title: string
  organization: string
  image: string
  bio: string
  isModerator?: boolean
}

const allSpeakers: Speaker[] = [
  {
    name: "Rodney J. Fuller",
    title: "Founding Partner",
    organization: "Fuller IP Law",
    image: "/RodFullerHeadshot.jpg.jpeg",
    isModerator: true,
    bio: `Rodney J. Fuller is a registered patent and trademark attorney and partner of Fuller IP Law.
A big-picture visionary with focused game-plan strategy skills, Rod proffers enthusiastic support and it's-possible thinking to turn your ambitious goals into reality. If you asked Rod about his biggest career successes, he probably wouldn't mention the multi-million dollar companies he represents or the international alliances he's established. Instead, he'd probably talk excitedly about the brilliant person he spoke with yesterday whose idea is going to change the world. If you were to remind him that you were hoping to hear about his biggest success, not his client's, he'd respond by expressing that is his greatest success: improving the world by giving the brilliant minds around him access to progress through his carefully designed strategies of intellectual property protection and growth. Perhaps the epitome of his inclination to beautify the world through proactive innovation is the new iris that he hybridized in his own backyard that was accepted by the American Iris Society. As a great communicator, Rod is a dependable guide through the IP maze without ever losing the joy of the dream.`
  },
  {
    name: "Patricia Stepp",
    title: "Assistant Vice President, Technology Transfer",
    organization: "Rice University",
    image: "/PatriciaSteppHeadshot.jpeg",
    bio: `Patricia Stepp is the Assistant Vice President for Technology Transfer at Rice University. She leads the strategic planning and operations of the Office of Technology Transfer (OTT). OTT manages Rice's intellectual property portfolio and oversees intellectual property evaluation, obtains intellectual property protection, and negotiates licensing agreements and research contracts.

She was previously at Skysong Innovations, Arizona State University's technology transfer office, where she was the director of intellectual property for the life sciences team. She created Skysong Innovations' diversity initiative, SEAT, which promotes research commercialization opportunities among underrepresented faculty. She also helped start the Phoenix chapter of Nucleate, a student-led nonprofit organization that helps launch life sciences startups using university-licensed technologies.

She is a registered patent agent who previously worked at a law firm and in-house, handling the preparation and prosecution of patent applications. She has a bachelor's degree in chemical engineering from the University of Arkansas and a Ph.D. in biomedical engineering from Illinois Institute of Technology. She completed a postdoctoral position at the Institute of Organic Chemistry and Biochemistry at the Czech Academy of Sciences and at the University of Pittsburgh's Department of Orthopaedic Surgery.`
  },
  {
    name: "Benjamin Tietgen",
    title: "General Counsel",
    organization: "VivaMed BioPharma",
    image: "/BenjaminTietgenHeadshot.jpg",
    bio: `Benjamin Tietgen is General Counsel at VivaMed BioPharma, where he leads legal, IP and regulatory strategy for an AI-enabled drug discovery and co-development platform and a diversified portfolio of pharmaceutical assets. Using his 20 years of experience in private practice, Ben supports VivaMed's university outreach and directs its patent-sanity workflows, combining rapid TTO triage, IP portfolio analysis, and crowdsourced scientific review to prioritize new and dormant academic inventions for collaborative development and commercialization. He advises on licensing, patent prosecution and venture transactions that translate university technologies into funded development programs.`
  },
  {
    name: "Taylor Bench",
    title: "Panelist",
    organization: "Summit Venture Studio",
    image: "/TaylorBenchHeadshot.png",
    bio: `Taylor Bench is one of the Managing Partners at Summit Venture Studio. He has extensive experience working in university tech transfer offices, which has given him a deep understanding of the unique challenges universities face when licensing and commercializing their technology. Based on his experience, he was inspired to create Summit Venture Studio.`
  }
]

function MicIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" x2="12" y1="19" y2="22"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18"/>
      <path d="m6 6 12 12"/>
    </svg>
  )
}

export function PanelSpeakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  const closeModal = () => setSelectedSpeaker(null)

  return (
    <section className="py-20 bg-horizon/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Panel Speakers
          </h2>
          <p className="text-dawn/70 text-lg max-w-2xl mx-auto">
            Meet the experts leading the conversation on dormant IP activation
          </p>
        </div>
        
        {/* All Panel Speakers in One Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {allSpeakers.map((speaker, index) => (
            <div 
              key={index} 
              className="bg-horizon/40 text-white rounded-xl border border-horizon hover:border-verde/50 transition-colors duration-300 overflow-hidden shadow-sm group cursor-pointer"
              onClick={() => setSelectedSpeaker(speaker)}
            >
              <div className="aspect-square overflow-hidden">
                <img src={speaker.image || "/placeholder.svg"} alt={speaker.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                {speaker.isModerator && (
                  <span className="inline-flex items-center justify-center rounded-md bg-verde text-white px-2 py-0.5 text-xs font-medium mb-2">
                    <MicIcon />
                    <span className="ml-1">Moderator</span>
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white mb-1">{speaker.name}</h3>
                <p className="text-verde text-sm font-medium mb-1">{speaker.title}</p>
                <p className="text-dawn/70 text-xs mb-3">{speaker.organization}</p>
                <p className="text-dawn/70 text-sm leading-relaxed line-clamp-3">{speaker.bio}</p>
                <p className="text-verde text-xs mt-2 group-hover:underline">Click to read more</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* AUTM Event Info Boxes */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-12 justify-center max-w-5xl mx-auto">
          <div className="flex items-center gap-3 bg-[#415569]/40 backdrop-blur-sm rounded-lg px-5 py-3 border border-[#5E7467]/30">
            <MapPin className="w-5 h-5 text-[#5E7467]" />
            <div className="text-left">
              <p className="text-white font-medium">Seattle Convention Center</p>
              <p className="text-white/60 text-sm">Arch 705 Pike St, Seattle, WA 98101</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-[#415569]/40 backdrop-blur-sm rounded-lg px-5 py-3 border border-[#5E7467]/30">
            <Calendar className="w-5 h-5 text-[#5E7467]" />
            <div className="text-left">
              <p className="text-white font-medium">Panel Discussion</p>
              <p className="text-white/60 text-sm">Tuesday, February 10th, 2026</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 bg-[#415569]/40 backdrop-blur-sm rounded-lg px-5 py-3 border border-[#5E7467]/30">
            <Clock className="w-5 h-5 text-[#5E7467]" />
            <div className="text-left">
              <p className="text-white font-medium">11:00 AM - 12:15 PM</p>
              <p className="text-white/60 text-sm">Pacific Time</p>
            </div>
          </div>
        </div>

        {/* Custom Speaker Modal */}
        {selectedSpeaker ? (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black/50" />
            <div 
              className="relative bg-slate border border-horizon rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-4 right-4 p-1 rounded-sm opacity-70 hover:opacity-100 transition-opacity z-10 text-white"
              >
                <CloseIcon />
              </button>
              
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4 pr-8">{selectedSpeaker.name}</h2>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 shrink-0">
                    <img 
                      src={selectedSpeaker.image || "/placeholder.svg"} 
                      alt={selectedSpeaker.name} 
                      className="w-full aspect-square object-cover object-top rounded-lg" 
                    />
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-verde font-medium mb-1">{selectedSpeaker.title}</p>
                    <p className="text-dawn/70 text-sm mb-4">{selectedSpeaker.organization}</p>
                    <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">{selectedSpeaker.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        
        <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-center mt-12">
          Universities, research institutions and other TTO's hold vast portfolios of intellectual property that often remain 
          underutilized. This panel brings together industry experts, university leaders, and legal professionals 
          to explore innovative strategies for unlocking the value of dormant IP assets.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button 
            size="lg"
            className="bg-[#415569] text-white hover:bg-[#415569]/80 font-medium px-8 py-6 text-base border border-[#5E7467]/30"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request More Info
          </Button>
          <a 
            href="https://fullerip.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border-2 border-[#5E7467] text-white hover:bg-[#5E7467]/20 px-8 py-3 text-base bg-transparent transition-all"
          >
            Schedule a 1-on-1
          </a>
        </div>
      </div>
    </section>
  )
}
