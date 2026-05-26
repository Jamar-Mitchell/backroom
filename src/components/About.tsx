export function About() {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-navy">
      {/* Gold accent block - top right */}
      <div className="absolute top-0 right-0 w-12 h-20 bg-gold opacity-80" />

      {/* Presented by */}
      <p className="text-sm text-white/50 mb-12">
        Presented by{' '}
        <span className="text-gold italic font-display">BackRoom</span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left - Text */}
        <div>
          <div className="w-12 h-[2px] bg-gold mb-6" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-10 tracking-wide">
            WELCOME TO<br />BACKROOM
          </h2>

          <div className="space-y-6 text-white/80 text-base leading-relaxed max-w-lg">
            <p>
              BackRoom was built on a simple principle: proximity determines outcomes.
              The right room doesn't just create connection — it accelerates opportunity.
            </p>
            <p>
              We bring together founders, innovators, and decision-makers
              who are shaping industries and building legacies.
            </p>
            <p>
              Through bespoke experiences, we foster the relationships that turn ideas into impact.
            </p>
          </div>

          {/* Quote */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-gold italic font-display text-lg">
              "Outcomes change when the room changes."
            </p>
            <p className="text-gold text-sm mt-2">— BackRoom</p>
          </div>
        </div>

        {/* Right - Image with BKRM overlay */}
        <div className="relative">
          <div className="aspect-[3/4] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Luxury interior"
              className="w-full h-full object-cover"
            />
          </div>
          {/* BKRM logo overlay */}
          <div className="absolute top-8 left-8 bg-gold/90 px-6 py-4">
            <span className="font-display text-navy text-2xl tracking-widest font-bold">
              BKRM
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
