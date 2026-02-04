"use client"

import React from "react"

import { FileText, CheckCircle2, Download, Loader2 } from "lucide-react"
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
                  <FileText className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4">
                  Free Whitepaper
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Sign up to receive our comprehensive research on dormant IP challenges and solutions.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5E7467] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Analysis of IP utilization trends in universities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5E7467] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Case studies of successful IP activation</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5E7467] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Actionable strategies for tech transfer offices</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#5E7467] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Legal considerations and best practices</span>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Form */}
              <div className="md:col-span-3 p-8 md:p-10">
                <h4 className="text-xl font-semibold text-[#333F4C] mb-2">
                  The Issue of Dormant IP in Universities
                </h4>
                <p className="text-[#415569]/70 mb-6">
                  Get exclusive access to our research whitepaper.
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
                      <label htmlFor="email" className="block text-sm font-medium text-[#415569] mb-1.5">
                        Work Email
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
                          <Download className="w-4 h-4 mr-2" />
                          Download Whitepaper
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
                    <h5 className="text-xl font-semibold text-[#333F4C] mb-2">Thank You!</h5>
                    <p className="text-[#415569]/70">
                      Your whitepaper is on its way to your inbox. Check your email shortly.
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
