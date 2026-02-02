import { Lightbulb } from "lucide-react"

export function EventDetails() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Panel Topic Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-horizon/20 border border-horizon/30 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="w-4 h-4 text-verde" />
              <span className="text-dawn text-sm font-medium">Fuller IP Panel Discussion</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-balance">
              Dormant No More: Alternative Paths to Fund and Activate Dormant IP
            </h2>
            
            <p className="text-lg text-dawn/80 leading-relaxed max-w-3xl mx-auto">
              Universities and research institutions hold vast portfolios of intellectual property that often remain 
              underutilized. This panel brings together industry experts, university leaders, and legal professionals 
              to explore innovative strategies for unlocking the value of dormant IP assets.
            </p>
          </div>
          
          {/* Key Topics */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-horizon/30 rounded-xl p-6 border border-horizon/50">
              <div className="w-12 h-12 bg-verde/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-verde font-semibold text-xl">01</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Funding Strategies</h3>
              <p className="text-dawn/70 text-sm">
                Discover alternative funding mechanisms to bring dormant technologies to market.
              </p>
            </div>
            
            <div className="bg-horizon/30 rounded-xl p-6 border border-horizon/50">
              <div className="w-12 h-12 bg-horizon/30 rounded-lg flex items-center justify-center mb-4">
                <span className="text-horizon font-semibold text-xl">02</span>
              </div>
              <h3 className="text-white font-semibold mb-2">IP Activation</h3>
              <p className="text-dawn/70 text-sm">
                Learn practical approaches to revitalize shelved patents and research outcomes.
              </p>
            </div>
            
            <div className="bg-horizon/30 rounded-xl p-6 border border-horizon/50">
              <div className="w-12 h-12 bg-verde/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-verde font-semibold text-xl">03</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Partnership Models</h3>
              <p className="text-dawn/70 text-sm">
                Explore collaborative frameworks between universities, investors, and industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
