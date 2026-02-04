import { Lightbulb } from "lucide-react"

export function EventDetails() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Panel Topic Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-horizon/20 border border-horizon/30 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="w-4 h-4 text-verde" />
              <span className="text-dawn text-sm font-medium">Fuller IP Panel Discussion</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-balance">
              Dormant No More: Alternative Paths to Fund and Activate Dormant IP
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
