"use client"

import { Play, ExternalLink } from "lucide-react"
import { useState } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const handlePlay = () => {
    setIsPlaying(true)
  }
  
  return (
    <section className="py-20 bg-[#415569]">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Featured Perspective
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Universities as the Invisible Hand: Dr. Michael Crow on Innovation & Impact
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden bg-[#333F4C]/30 border border-[#5E7467]/30">
            {isPlaying ? (
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/qqfk7-3iN-U?autoplay=1"
                  title="ASU Dr. Michael Crow Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative aspect-video">
                <img 
                  src="https://img.youtube.com/vi/qqfk7-3iN-U/maxresdefault.jpg"
                  alt="ASU Dr. Michael Crow on Universities and Innovation"
                  className="w-full h-full object-cover"
                />
                
                <div className="absolute inset-0 bg-[#333F4C]/40 flex items-center justify-center">
                  <button 
                    type="button"
                    onClick={handlePlay}
                    className="group relative"
                    aria-label="Play video"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#5E7467] flex items-center justify-center group-hover:bg-[#415569] transition-colors duration-300 shadow-2xl">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
                    </div>
                  </button>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#333F4C] via-[#333F4C]/80 to-transparent">
                  <p className="text-white font-medium text-lg mb-2">
                    Dr. Michael Crow & Dr. Marcia McNutt
                  </p>
                  <p className="text-white/70 text-sm">
                    Arizona State University President discusses how universities serve as the invisible hand driving innovation and economic growth.
                  </p>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-center mt-6">
            <a 
              href="https://news.asu.edu/20250822-science-and-technology-universities-are-invisible-hand-michael-crow-marcia-mcnutt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium text-white/70 hover:text-white hover:bg-[#333F4C]/30 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Read the full ASU News article
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
