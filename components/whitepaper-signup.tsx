"use client"

import React from "react"

import { Globe, CheckCircle2, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { sendWaitingListEmail } from "@/app/actions/send-waiting-list-email"

export function WhitepaperSignup() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    const result = await sendWaitingListEmail({ name, phone, email })
    
    if (result.success) {
      setSubmitted(true)
    } else {
      setError("Something went wrong. Please try again.")
    }
    
    setIsLoading(false)
  }
  
  return (
    <section className="py-20 bg-[#333F4C]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-[#415569]/40 overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Left Side - Info */}
              <div className="md:col-span-2 bg-[#415569] p-8 md:p-10 text-white">
                <div className="w-14 h-14 bg-[#5E7467]/30 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">
                  Fuller IP PCT Portal
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Receive a discount on your first month when you join the Fuller IP PCT Portal Waiting List today.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5E7467] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Early access to our PCT Portal platform</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5E7467] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Exclusive first-month discount</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5E7467] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Priority onboarding support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5E7467] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Be the first to know when we launch</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Form */}
              <div className="md:col-span-3 p-8 md:p-10">
                <h4 className="text-xl font-semibold text-[#333F4C] mb-2">
                  Join the Waiting List
                </h4>
                <p className="text-[#415569]/70 mb-6">
                  Sign up now to receive your discount when the PCT Portal launches.
                </p>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#415569] mb-1.5">
                        Full Name
                      </label>
                      <Input 
                        id="name"
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border-[#415569]/30 focus:border-[#415569] focus:ring-[#415569]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#415569] mb-1.5">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="border-[#415569]/30 focus:border-[#415569] focus:ring-[#415569]"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#415569] mb-1.5">
                        Email Address
                      </label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-[#415569]/30 focus:border-[#415569] focus:ring-[#415569]"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-[#415569] hover:bg-[#5E7467] text-white font-medium mt-2"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Join Waiting List
                        </>
                      )}
                    </Button>
                    
                    {error && (
                      <p className="text-sm text-red-500 text-center">{error}</p>
                    )}
                    
                    <p className="text-xs text-[#415569]/50 text-center">
                      By signing up, you agree to receive communications from Fuller IP Law. 
                      We respect your privacy.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#5E7467]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-[#5E7467]" />
                    </div>
                    <h5 className="text-xl font-semibold text-[#333F4C] mb-2">You're on the List!</h5>
                    <p className="text-[#415569]/70">
                      We'll notify you when the PCT Portal launches with your exclusive discount.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
