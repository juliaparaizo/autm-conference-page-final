"use client"

import { MapPin, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] bg-[#333F4C] overflow-hidden">
      {/* Growth Graphic Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute right-0 top-0 h-full w-1/2" viewBox="0 0 400 600" fill="none">
          <rect x="280" y="400" width="80" height="200" fill="#415569" />
          <rect x="180" y="300" width="80" height="300" fill="#5E7467" />
          <rect x="80" y="200" width="80" height="400" fill="#415569" />
        </svg>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Fuller IP Logo */}
          <img 
            src="/fullerip-rgb-horizontal-white.png"
            alt="Fuller IP Law - Blackman, Burnham, Fuller"
            className="h-16 md:h-20 mb-8"
          />
          
          {/* Sponsor Badge */}
          <div className="inline-flex items-center gap-2 bg-[#415569]/50 border border-[#5E7467]/50 rounded-full px-4 py-2 mb-6">
            <span className="text-white text-sm font-medium tracking-wide uppercase">Proud Sponsor</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 text-balance max-w-4xl">
            AUTM 2026 Annual Conference
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl font-light">
            Fuller IP Law is honored to sponsor and participate in the premier technology transfer and IP commercialization event.
          </p>
          
          {/* Event Details Cards */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-12">
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
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
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
      </div>
    </section>
  )
}
