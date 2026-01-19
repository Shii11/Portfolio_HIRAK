import React from 'react'

const About = () => {
  return (
    <section id='about' className="min-h-screen flex items-center px-6 md:px-16 lg:px-28 relative overflow-hidden">

      {/* Big background text */}
      <h1 className="absolute top-10 left-6 md:left-16 text-[3rem] md:text-[7rem] font-bold tracking-widest text-black/20">
        ABOUT
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center w-full z-10 mt-50 mb-20">

        {/* Video */}
        <div className="flex justify-center md:justify-start">
          <div className="w-72 h-80 rounded-full overflow-hidden ">
            <video
              src="src\assets\profile\VID-20260119-WA0010.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>


        {/* Text */}
        <div className="max-w-xl text-black/80 text-sm leading-relaxed tracking-wide">
          <p className="mb-6">
            I am Hirak Jyoti Nath, a storyteller and multidisciplinary artist crafting narratives across theatre, short films, and web series. My background as a storyboard and concept artist gives me a unique edge, allowing me to envision stories visually and translate them into immersive, cinematic experiences.
          </p>

          <p className="mb-6">
            I combine structured writing, cultural insight, and artistic sensibility to create compelling narratives that resonate, engage, and leave a lasting impact.
          </p>

        </div>

      </div>

      {/* Bottom curve line */}
      <div className="absolute bottom-10 left-0 w-full border-t border-black/20 rotate-[-2deg]" />
    </section>
  )
}

export default About
