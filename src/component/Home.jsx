import React from 'react'
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id='home' className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-[0.3em] font-normal text-black">
        HIRAK JYOTI NATH
      </h1>

      <p className="mt-6 text-sm tracking-widest text-black/70">
        Writer and Illustrator
      </p>

      <div className="mt-10 flex gap-6">
        <a href="#writeups">
          <button className="bg-black text-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black border transition">
            WriteUps
          </button>
        </a>

        <a href="#artworks">
          <button className="border border-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition">
            ArtWorks
          </button>
        </a>
      </div>
      
    </section>
  )
}

export default Home
