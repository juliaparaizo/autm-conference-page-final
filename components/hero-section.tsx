"use client"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] bg-[#333F4C] overflow-hidden">
      {/* Horizontal Steps Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute left-0 bottom-0 w-full h-1/2" viewBox="0 0 800 300" fill="none" preserveAspectRatio="none">
          <rect x="0" y="200" width="800" height="100" fill="#415569" />
          <rect x="0" y="120" width="600" height="80" fill="#5E7467" />
          <rect x="0" y="60" width="400" height="60" fill="#415569" />
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
