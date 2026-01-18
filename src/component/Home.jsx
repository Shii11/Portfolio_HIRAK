import React from 'react'

const Home = () => {
  return (
     <section id='home' className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-[0.3em] font-normal text-black">
        HIRAK JYOTI NATH
      </h1>

      <p className="mt-6 text-sm tracking-widest text-black/70">
        Writer and Illustrator
      </p>

      <p className="mt-2 text-xs tracking-wider text-black/60">
        Born in Assam
      </p>

      <button className="mt-10 bg-black text-white px-8 py-3 text-sm tracking-widest hover:bg-black/80 transition">
        SAY HI!
      </button>
      {/* Curved line effect (fake it, because CSS drama is optional) */}
      {/* <div className="w-full max-w-5xl border-t border-black/30 mb-10"></div> */}
    </section>
  )
}

export default Home
