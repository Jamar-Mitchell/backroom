const traits = [
  'Technology, AI & Emerging Innovation',
  'Health, Longevity & Human Performance',
  'Finance, Private Equity & Venture Capital',
  'Creative, Branding & Cultural Leadership',
]

const behaviors = [
  'Selective about where they show up',
  'Invest in environments aligned with their standard',
  'Value proximity to other high-caliber builders',
  'Move through trusted networks, not open rooms',
]

export function Audience() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        {/* Left text */}
        <div className="lg:col-span-6">
          <div className="section-divider mb-8" />
          <h2 className="font-display text-4xl md:text-5xl text-white font-light tracking-wide mb-12 leading-tight">
            Who is in<br />
            <span className="text-gold">the room</span>
          </h2>

          <p className="text-white/50 text-sm font-medium tracking-wider uppercase mb-6">
            Founders, Innovators & Decision-Makers
          </p>

          <div className="space-y-8">
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Sectors</p>
              <ul className="space-y-2">
                {traits.map((t) => (
                  <li key={t} className="text-white/60 text-sm flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Defined by behavior</p>
              <ul className="space-y-2">
                {behaviors.map((b) => (
                  <li key={b} className="text-white/60 text-sm flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right - image */}
        <div className="lg:col-span-6 relative">
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
              alt="Networking event"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
          </div>

          {/* Floating quote */}
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-white/80 text-lg italic leading-relaxed">
              "The best businesses aren't built in silos — they're built in community."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
