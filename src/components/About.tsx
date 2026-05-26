export function About() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left text */}
        <div className="lg:col-span-7">
          <div className="section-divider mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-light tracking-wide leading-tight mb-10">
            Where proximity<br />
            <span className="text-gold">shapes possibility.</span>
          </h2>

          <div className="space-y-5 text-white/60 text-[15px] leading-[1.8] max-w-lg">
            <p>
              BackRoom was built on a simple principle: proximity determines outcomes.
              The right room doesn't just create connection — it accelerates opportunity.
            </p>
            <p>
              We bring together founders, innovators, and decision-makers
              who are shaping industries and building legacies.
            </p>
            <p>
              Through bespoke experiences, we foster the relationships
              that turn ideas into impact.
            </p>
          </div>
        </div>

        {/* Right - minimal accent */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
              alt="Luxury interior"
              className="w-full h-full object-cover opacity-80"
            />
            {/* Gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
