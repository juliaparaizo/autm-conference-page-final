"use client"

import { useState } from "react"

type Speaker = {
  name: string
  title: string
  organization: string
  image: string
  bio: string
}

const moderator = {
  name: "Rodney J. Fuller",
  title: "Founding Partner",
  organization: "Fuller IP Law",
  image: "/RodFullerHeadshot.jpg.jpeg",
  bio: `Rodney J. Fuller is a registered patent and trademark attorney and partner of Fuller IP Law.
A big-picture visionary with focused game-plan strategy skills, Rod proffers enthusiastic support and it's-possible thinking to turn your ambitious goals into reality. If you asked Rod about his biggest career successes, he probably wouldn't mention the multi-million dollar companies he represents or the international alliances he's established. Instead, he'd probably talk excitedly about the brilliant person he spoke with yesterday whose idea is going to change the world. If you were to remind him that you were hoping to hear about his biggest success, not his client's, he'd respond by expressing that is his greatest success: improving the world by giving the brilliant minds around him access to progress through his carefully designed strategies of intellectual property protection and growth. Perhaps the epitome of his inclination to beautify the world through proactive innovation is the new iris that he hybridized in his own backyard that was accepted by the American Iris Society. As a great communicator, Rod is a dependable guide through the IP maze without ever losing the joy of the dream.`
}

const speakers: Speaker[] = [
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
        
        {/* Moderator Card - Featured */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="bg-horizon/40 text-white rounded-xl border-2 border-verde/30 overflow-hidden shadow-sm">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 overflow-hidden">
                <img src={moderator.image || "/placeholder.svg"} alt={moderator.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center rounded-md bg-verde text-white px-2 py-0.5 text-xs font-medium">
                    <MicIcon />
                    <span className="ml-1">Moderator</span>
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-1">{moderator.name}</h3>
                <p className="text-verde font-medium mb-1">{moderator.title}</p>
                <p className="text-dawn/70 text-sm mb-4">{moderator.organization}</p>
                <p className="text-white/80 text-sm leading-relaxed">{moderator.bio}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Panel Speakers Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {speakers.map((speaker, index) => (
            <div 
              key={index} 
              className="bg-horizon/40 text-white rounded-xl border border-horizon hover:border-verde/50 transition-colors duration-300 overflow-hidden shadow-sm group cursor-pointer"
              onClick={() => setSelectedSpeaker(speaker)}
            >
              <div className="aspect-square overflow-hidden">
                <img src={speaker.image || "/placeholder.svg"} alt={speaker.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white mb-1">{speaker.name}</h3>
                <p className="text-verde text-sm font-medium mb-1">{speaker.title}</p>
                <p className="text-dawn/70 text-xs mb-3">{speaker.organization}</p>
                <p className="text-dawn/70 text-sm leading-relaxed line-clamp-4">{speaker.bio}</p>
                <p className="text-verde text-xs mt-2 group-hover:underline">Click to read more</p>
              </div>
            </div>
          ))}
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
        
        <p className="text-center text-dawn/50 text-sm mt-8 italic">
          Speaker photos and complete bios will be updated as confirmed.
        </p>
      </div>
    </section>
  )
}
