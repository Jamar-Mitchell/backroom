export function Audience() {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-navy">
      {/* Gold accent block */}
      <div className="absolute top-0 right-0 w-12 h-20 bg-gold opacity-80" />

      {/* Presented by */}
      <p className="text-sm text-white/50 mb-12">
        Presented by{' '}
        <span className="text-gold italic font-display">BackRoom</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
        {/* Left - Text */}
        <div>
          <div className="w-12 h-[2px] bg-gold mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-12 tracking-wide">
            WHO IS IN<br />THE ROOM
          </h2>

          <div className="space-y-8">
            {/* Founders */}
            <div>
              <h3 className="text-gold font-semibold text-sm tracking-wider mb-2">
                Founders, Innovators, and Decision-Makers
              </h3>
              <p className="text-white/70 text-sm">
                Building and scaling high-growth companies
              </p>
            </div>

            {/* Sectors */}
            <div>
              <h3 className="text-gold font-semibold text-sm tracking-wider mb-2">
                Across Sectors
              </h3>
              <ul className="text-white/70 text-sm space-y-1">
                <li>Technology, AI & Emerging Innovation</li>
                <li>Health, Longevity & Human Performance</li>
                <li>Finance, Private Equity & Venture Capital</li>
                <li>Creative, Branding & Cultural Leadership</li>
              </ul>
            </div>

            {/* Behavior */}
            <div>
              <h3 className="text-gold font-semibold text-sm tracking-wider mb-2">
                Defined by Behavior
              </h3>
              <ul className="text-white/70 text-sm space-y-1">
                <li>Selective about where they show up</li>
                <li>Invest in environments aligned with their standard</li>
                <li>Value proximity to other high-caliber builders</li>
                <li>Move through trusted networks, not open rooms</li>
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-gold italic font-display text-lg">
              "The best businesses aren't built in silos — they're built in community."
            </p>
            <p className="text-gold text-sm mt-2">— BackRoom</p>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative">
          <div className="aspect-[3/4] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
              alt="Networking event"
              className="w-full h-full object-cover"
            />
          </div>
          {/* BKRM logo overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold/20 backdrop-blur-sm px-8 py-5">
            <span className="font-display text-gold text-3xl tracking-widest font-bold">
              BKRM
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
