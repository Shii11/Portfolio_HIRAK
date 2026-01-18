import React from 'react'

const FeaturedWork = () => {

  const works = [
  {
    title: "Tales From the Tea Place",
    subtitle: "Screenplay",
    image: null,
    tagline1: "Bronze Award - WAVES 2025 (Worlds of Audio Visual Entertainment Summit)",
    tagline2: null,
  },
  {
    title: "The Jump?",
    subtitle: "Screenplay",
    image: null,
    tagline1: "Winner, Best Short Film - Global Film Festival (Noida) 2023",
    tagline2: "Winner, Best Screenplay - Chandigarh University Film Festival 2023",
  },
];

  return (
    <section id='featuredWork' className="min-h-screen px-6 md:px-16 lg:px-28 pt-72 pb-24 relative overflow-hidden">
      
      <h2 className="absolute top-10 left-6 md:left-16 text-[3rem] md:text-[8rem] font-bold tracking-widest text-black/20">
        FEATURED WORKS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto md:mt-56">

        {works.map((work, index) => (
          <div
            key={index}
            className="border border-black/20 p-10 flex flex-col justify-between min-h-[260px]"
          >
            <p className="text-xs uppercase tracking-widest text-black/60">
              {work.subtitle}
            </p>

            <h3 className="mt-4 text-xl font-medium tracking-wide text-black">
              {work.title}
            </h3>

            <p className="mt-6 text-sm italic text-black/70">
              {work.tagline1}
            </p>
            <p className="text-sm italic text-black/70">
              {work.tagline2}
            </p>
          </div>
        ))}

      </div>
      <div className="absolute bottom-10 left-0 w-full border-t border-black/20 rotate-[2deg]" />
    </section>
  )
}

export default FeaturedWork
