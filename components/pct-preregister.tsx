"use client"

import React from "react"
import { Globe, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function PctPreregister() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    // Log the submission
    console.log("PCT Portal Pre-registration:", {
      name,
      email,
      submittedAt: new Date().toISOString(),
      recipient: "info@fullerip.com"
    })
    
    setSubmitted(true)
    setIsLoading(false)
  }
  
  return (
    <section id="pct-preregister" className="py-16 bg-horizon/20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-verde/20 border border-verde/30 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-verde" />
            <span className="text-verde text-sm font-medium">Coming Soon</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            PCT Portal Pre-Registration
          </h2>
          
          <p className="text-white/80 mb-8 leading-relaxed">
            Pre-register now and receive a discount when the PCT Portal goes live.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <Input 
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="border-horizon bg-slate/50 text-white placeholder:text-dawn/50 focus:border-verde"
              />
              
              <Input 
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-horizon bg-slate/50 text-white placeholder:text-dawn/50 focus:border-verde"
              />
              
              <Button 
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full bg-verde hover:bg-verde/80 text-white font-medium"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Pre-Register for Discount"
                )}
              </Button>
              
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-verde/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-verde" />
              </div>
              <h5 className="text-xl font-semibold text-white mb-2">You're Pre-Registered!</h5>
              <p className="text-white/70">
                We'll notify you when the PCT Portal launches with your exclusive discount.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
