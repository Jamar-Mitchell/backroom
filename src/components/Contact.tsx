export function Contact() {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-navy">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left - CTA */}
        <div>
          <p className="text-sm text-white/50 mb-4">
            Presented by{' '}
            <span className="text-gold italic font-display">BackRoom</span>
          </p>

          <div className="w-12 h-[2px] bg-gold mb-6" />
          <p className="text-gold font-display italic text-lg mb-4">BackRoom</p>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-12 tracking-wide">
            REQUEST MORE<br />INFORMATION
          </h2>

          {/* RSVP Button */}
          <a
            href="https://form.typeform.com/to/VsSeEVzN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-4 text-lg tracking-wide transition-colors duration-300 mb-8"
          >
            RSVP NOW
          </a>

          {/* Contact info */}
          <div className="space-y-4 mt-8">
            <a
              href="mailto:INFO@BKRM.IO"
              className="flex items-center gap-4 bg-gold/90 hover:bg-gold text-navy px-6 py-4 w-fit transition-colors duration-300"
            >
              <span className="text-navy font-bold text-lg">›</span>
              <span className="font-semibold tracking-wide">INFO@BKRM.IO</span>
            </a>
            <a
              href="tel:7183447128"
              className="flex items-center gap-4 bg-gold/90 hover:bg-gold text-navy px-6 py-4 w-fit transition-colors duration-300"
            >
              <span className="text-navy font-bold text-lg">›</span>
              <span className="font-semibold tracking-wide">718-344-7128</span>
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1529543544006-1bd3f5466ae4?auto=format&fit=crop&w=800&q=80"
              alt="BackRoom event"
              className="w-full h-full object-cover"
            />
          </div>
          {/* BKRM on wall overlay */}
          <div className="absolute top-1/3 left-8 opacity-60">
            <span className="font-display text-gold text-4xl tracking-widest font-bold">
              BKRM
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 text-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} BackRoom. All rights reserved.
        </p>
      </div>
    </section>
  )
}
