const experiences = [
  {
    title: 'PRIVATE DINNERS',
    description: 'Intentionally crafted dinners within a high-trust environment.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'EXECUTIVE RETREATS',
    description: 'Small-group off-sites focused on restoration and peer exchange.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'ROUNDTABLE DISCUSSIONS',
    description: 'Closed-door sessions with founders scaling $1M+ sharing growth playbooks.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'CULTURAL ACCESS',
    description: 'Private access to invite-only experiences across art, dining, and emerging spaces.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
  },
]

export function Experience() {
  return (
    <section className="relative py-24 px-6 md:px-16 lg:px-24 bg-navy-dark">
      {/* Gold accent block */}
      <div className="absolute top-0 right-0 w-12 h-20 bg-gold opacity-80" />

      {/* Presented by */}
      <p className="text-sm text-white/50 mb-6">
        Presented by{' '}
        <span className="text-gold italic font-display">BackRoom</span>
      </p>

      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-16 tracking-wide">
          THE EXPERIENCE
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-sm mb-4">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-gold text-sm font-semibold tracking-wider mb-2">
                {exp.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-gold italic font-display text-lg">
            "Growth happens faster in spaces where knowledge is shared, not guarded."
          </p>
          <p className="text-gold text-sm mt-2">— BackRoom</p>
        </div>
      </div>
    </section>
  )
}
