export function Contact() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 bg-navy-dark/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - CTA */}
        <div>
          <div className="section-divider mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide leading-tight mb-8">
            Request<br />
            <span className="text-gold">access</span>
          </h2>

          <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-12">
            Interested in joining? Submit an inquiry and we'll be in touch.
          </p>

          {/* RSVP Button */}
          <a
            href="https://form.typeform.com/to/VsSeEVzN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-medium px-10 py-4 text-sm tracking-wider uppercase transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg hover:shadow-gold/20"
          >
            Request Information
          </a>

          {/* Contact info */}
          <div className="mt-14 space-y-4">
            <a
              href="mailto:INFO@BKRM.IO"
              className="flex items-center gap-3 text-white/40 hover:text-gold text-sm transition-colors duration-300"
            >
              <span className="w-4 h-px bg-gold" />
              INFO@BKRM.IO
            </a>
            <a
              href="tel:7183447128"
              className="flex items-center gap-3 text-white/40 hover:text-gold text-sm transition-colors duration-300"
            >
              <span className="w-4 h-px bg-gold" />
              718-344-7128
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative hidden lg:block">
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529543544006-1bd3f5466ae4?auto=format&fit=crop&w=800&q=80"
              alt="BackRoom event"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-32 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-gold text-lg tracking-[0.3em]">BKRM</span>
        <p className="text-white/20 text-xs tracking-wide">
          © {new Date().getFullYear()} BackRoom. All rights reserved.
        </p>
      </div>
    </section>
  )
}
