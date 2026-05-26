export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-navy-dark/80 z-10" />
      
      {/* Background image - dark upscale lounge */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <h1 className="font-display text-6xl md:text-8xl tracking-wider text-gold mb-6">
          BACKROOM
        </h1>
        <p className="text-lg md:text-xl text-white/90 font-light tracking-wide max-w-2xl mx-auto">
          A private, curated room of founders, innovators, and decision-makers
          shaping business and culture.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 z-20 animate-bounce">
        <div className="w-[1px] h-12 bg-gold/60 mx-auto" />
      </div>

      {/* Gold accent block - top right */}
      <div className="absolute top-0 right-0 w-16 h-24 bg-gold z-20 opacity-80" />
    </section>
  )
}
