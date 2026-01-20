import React from 'react'
import talePoster from '../assets/work-poster/Tales_From_the_Teaplace.jpg';
import jumpPoster from '../assets/work-poster/The_Jump.jpg';

const FeaturedWork = () => {

  const works = [
    {
      title: "Tales From the Tea Place",
      subtitle: "Screenplay",
      image: talePoster,
      tagline1: "Bronze Award - WAVES 2025 (Worlds of Audio Visual Entertainment Summit)",
      tagline2: null,
      links: {
      news: "https://timesofindia.indiatimes.com/city/guwahati/animation-filmmakers-contest-citys-tales-from-the-tea-house-makes-wave-recognise-art/articleshow/120740185.cms",
      youtube: null,
    },
    },
    {
      title: "The Jump?",
      subtitle: "Screenplay",
      image: jumpPoster,
      tagline1: "Winner, Best Short Film - Global Film Festival (Noida) 2023",
      tagline2: "Winner, Best Screenplay - Chandigarh University Film Festival 2023",
      links: {
      news: null,
      youtube: "https://youtu.be/NSQsILzKHjI?si=E9kOok0_qhM-S2Nu",
    },
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
            className="relative border border-black/20 p-10 min-h-[260px]
    transition-all duration-300 ease-out
    hover:scale-[1.05]
    hover:-translate-y-6
    hover:shadow-2xl
    hover:bg-white
    hover:z-30"
          >
            <p className="text-xs uppercase tracking-widest text-black/60">
              {work.subtitle}
            </p>

            <h3 className="mt-4 text-xl font-medium tracking-wide text-black">
              {work.title}
            </h3>

            {work.image && (
              <img
                src={work.image}
                alt={work.title}
                className="my-6 w-full h-[220px] object-cover grayscale hover:grayscale-0 transition"
              />
            )}

            <p className="mt-6 text-sm italic text-black/70">
              {work.tagline1}
            </p>
            <p className="text-sm italic text-black/70">
              {work.tagline2}
            </p>

            <div className="mt-6 flex gap-6 text-xs tracking-widest">
  {work.links && work.links.news && (
    <a
      href={work.links.news}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 hover:text-black"
    >
      Read Article
    </a>
  )}

  {work.links && work.links.youtube && (
    <a
      href={work.links.youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-4 hover:text-black"
    >
      Watch Video
    </a>
  )}
</div>

          </div>
        ))}

      </div>
      <div className="absolute bottom-10 left-0 w-full border-t border-black/20 rotate-[2deg]" />
    </section>
  )
}

export default FeaturedWork
