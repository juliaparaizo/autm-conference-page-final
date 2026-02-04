import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#BE4D00] via-[#FF6727] to-[#EE9C38] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and Tagline */}
            <div className="text-center md:text-left">
              <img 
                src="/fullerip-rgb-horizontal-white.png"
                alt="Fuller IP Law"
                className="h-12 mb-3 mx-auto md:mx-0"
              />
              <p className="text-white font-medium text-sm tracking-wide flex items-center gap-1">
                Cultivating Your Success
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-white text-[8px] font-bold leading-none">SM</span>
              </p>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a 
                href="https://fullerip.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                Visit Fuller IP Law
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://fullerip.com/our-team/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                Meet Our Team
                <ExternalLink className="w-3 h-3" />
              </a>
              <a 
                href="https://autm.net" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
              >
                AUTM Official Site
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          
          <hr className="border-white/30 my-8" />
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {new Date().getFullYear()} Fuller IP Law. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  )
}
