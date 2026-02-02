import { ExternalLink } from "lucide-react"

export function Header() {
    return (
        <header className="bg-gradient-to-r from-[#BE4D00] via-[#FF6727] to-[#EE9C38] text-white py-4">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Logo */}
                        <div className="flex items-center gap-4">
                            <img
                                src="/fullerip-rgb-horizontal-white.png"
                                alt="Fuller IP Law"
                                className="h-10"
                            />
                            <span className="hidden sm:inline text-white/80 text-sm font-medium">
                                Cultivating Your Success
                            </span>
                        </div>

                        {/* Links */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <a
                                href="https://fullerip.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
                            >
                                fullerip.com
                                <ExternalLink className="w-3 h-3" />
                            </a>
                            <a
                                href="https://autm.net"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
                            >
                                autm.net
                                <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
