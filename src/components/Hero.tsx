export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/90 via-navy/70 to-navy z-10" />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl fade-up">
        <div className="section-divider mx-auto mb-8" />
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.15em] text-white font-light mb-8">
          BACKROOM
        </h1>
        <p className="text-base md:text-lg text-white/60 font-light tracking-wide leading-relaxed max-w-xl mx-auto">
          A private, curated room of founders, innovators, and decision-makers
          shaping business and culture.
        </p>

        {/* Scroll hint */}
        <div className="mt-20">
          <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent mx-auto" />
        </div>
      </div>
    </section>
  )
}
