"use client"

import React from "react"

import { Mail, Phone, MapPin, Calendar, ArrowRight, Globe, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { sendContactEmail } from "@/app/actions/send-contact-email"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    const result = await sendContactEmail(formData)
    
    if (result.success) {
      setSubmitted(true)
    } else {
      setError("Something went wrong. Please try again.")
    }
    
    setIsLoading(false)
  }
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Connect with Fuller IP Law
            </h2>
            <p className="text-dawn/70 text-lg max-w-2xl mx-auto">
              Have questions about the panel discussion or want to learn more about our IP services?
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* About Fuller IP */}
              <div className="bg-horizon/30 rounded-xl p-6 border border-horizon/50">
                <h3 className="text-lg font-semibold text-white mb-3">About Fuller IP Law</h3>
                <p className="text-dawn/70 text-sm leading-relaxed mb-4">
                  Fuller IP Law is a full-service intellectual property law firm dedicated to 
                  safeguarding IP rights. We specialize in patents, trademarks, copyrights, and more, 
                  providing protection and value for our clients&apos; innovations.
                </p>
                <p className="text-dawn/70 text-sm leading-relaxed">
                  Serving startups, established businesses, and individual inventors, we tailor 
                  our services to meet unique needs backed by extensive experience across various industries.
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-horizon/20 transition-colors">
                  <div className="w-10 h-10 bg-horizon/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-verde" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Email Us</p>
                    <a href="mailto:info@fullerip.com" className="text-dawn/70 text-sm hover:text-verde transition-colors">
                      info@fullerip.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-horizon/20 transition-colors">
                  <div className="w-10 h-10 bg-verde/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-verde" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Call Us</p>
                    <a href="tel:+14809999999" className="text-dawn/70 text-sm hover:text-verde transition-colors">
                      Contact for phone number
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-horizon/20 transition-colors">
                  <div className="w-10 h-10 bg-horizon/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-horizon" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Visit Us</p>
                    <p className="text-dawn/70 text-sm">
                      Phoenix, Arizona
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  size="lg"
                  className="w-full bg-horizon hover:bg-horizon/80 text-white font-medium"
                  asChild
                >
                  <a href="https://fullerip.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Schedule a 1-on-1 Consultation
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
                
                <div className="bg-horizon/30 rounded-xl p-4 border border-horizon/50">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Globe className="w-5 h-5 text-verde" />
                    <span className="text-white font-medium text-sm">Portal for US National Stage Filings from PCTs</span>
                    <span className="text-xs bg-verde/20 text-verde px-2 py-0.5 rounded-full">Coming Soon</span>
                  </div>
                  <p className="text-white/80 text-sm mb-3 leading-relaxed">
                    High value, low cost, efficient US National Stage filing for your PCT Applications by a trusted, reliable US Law Firm. Additional discounts available for bulk filing.
                  </p>
                  <p className="text-dawn/70 text-xs mb-3">
                    Pre-register now and receive a discount when we go live.
                  </p>
                  <Button 
                    size="sm"
                    className="w-full bg-verde hover:bg-verde/80 text-white font-medium"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Pre-Register for Discount
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-horizon/30 rounded-xl border border-horizon/50 p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-6">Request More Information</h3>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-dawn mb-1.5">
                          Full Name *
                        </label>
                        <Input 
                          id="contact-name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                          className="border-horizon bg-slate/50 text-white placeholder:text-dawn/50 focus:border-verde"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-dawn mb-1.5">
                          Email Address *
                        </label>
                        <Input 
                          id="contact-email"
                          type="email"
                          placeholder="you@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          required
                          className="border-horizon bg-slate/50 text-white placeholder:text-dawn/50 focus:border-verde"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="contact-org" className="block text-sm font-medium text-dawn mb-1.5">
                        Organization
                      </label>
                      <Input 
                        id="contact-org"
                        type="text"
                        placeholder="Your company or university"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        className="border-horizon bg-slate/50 text-white placeholder:text-dawn/50 focus:border-verde"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-dawn mb-1.5">
                        Message *
                      </label>
                      <Textarea 
                        id="contact-message"
                        placeholder="How can we help you? Tell us about your interest in the AUTM panel or your IP needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        rows={5}
                        className="border-horizon bg-slate/50 text-white placeholder:text-dawn/50 focus:border-verde resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isLoading}
                      className="w-full bg-verde hover:bg-verde/80 text-white font-medium"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                    
                    {error && (
                      <p className="text-sm text-red-500 text-center">{error}</p>
                    )}
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-verde/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-verde" />
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-dawn/70">
                      Thank you for reaching out. A member of our team will be in touch shortly.
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
