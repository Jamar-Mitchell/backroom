const experiences = [
  {
    title: 'Private Dinners',
    description: 'Intentionally crafted dinners within a high-trust environment.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Executive Retreats',
    description: 'Small-group off-sites focused on restoration and peer exchange.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Roundtable Discussions',
    description: 'Closed-door sessions with founders scaling $1M+ sharing growth playbooks.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Cultural Access',
    description: 'Invite-only experiences across art, dining, and emerging spaces.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
  },
]

export function Experience() {
  return (
    <section className="py-32 px-6 md:px-16 lg:px-24 bg-navy-dark/50">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-8" />
        <h2 className="font-display text-4xl md:text-5xl text-white font-light tracking-wide mb-4">
          The Experience
        </h2>
        <p className="text-white/40 text-sm mb-16 max-w-md">
          Curated moments designed to accelerate relationships and unlock new levels of access.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp) => (
            <div key={exp.title} className="group cursor-default">
              <div className="aspect-[4/5] overflow-hidden rounded-sm mb-5 relative">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
              </div>
              <h3 className="text-white text-sm font-medium tracking-wide mb-2 group-hover:text-gold transition-colors duration-300">
                {exp.title}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
