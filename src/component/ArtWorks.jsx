import React, { useState } from "react";
import concept from "../assets/ConceptArt/Concept Art Thumbnail.png"
import concept1 from "../assets/ConceptArt/concept1.jpg";
import concept2 from "../assets/ConceptArt/Concept Art Thumbnail.png";
import storyboard from "../assets/StoryBoard/storyboard.png";
import fashion from "../assets/FashionGraphics/fashion.png";
import illustration from "../assets/Illustrations/Illustration Thumbnail.png";
import illustration1 from "../assets/Illustrations/illustration.png";
import illustration2 from "../assets/Illustrations/Charcters and concept.png";
import illustration3 from "../assets/Illustrations/Earthly and Engineered.png";

/* ===== MAIN GRID ===== */
const works = [
  {
    id: "concept",
    title: "Concept Art",
    image: concept,
  },
  {
    id: "storyboard",
    title: "Story Board",
    image: storyboard,
    link: "https://www.behance.net/gallery/168270091/Storyboards",
  },
  {
    id: "fashion",
    title: "Fashion Graphics",
    image: fashion,
    link: "https://www.behance.net/gallery/204500577/Fashion-Graphics",
  },
  {
    id: "illustration",
    title: "Illustration",
    image: illustration,
  },
];

/* ===== MODAL DATA ===== */
const modalData = {
  concept: [
    {
      title: "Sermons of Epiphany",
      image: concept1,
      link: "https://www.behance.net/gallery/241480383/Sermons-of-Epiphany",
    },
    {
      title: "Assamese Demonology",
      image: concept2,
      link: "https://www.behance.net/gallery/241480383/Assamese-Demonology",
    },
  ],

  illustration: [
    {
      title: "Book Illustration",
      image: illustration1,
      link: "https://www.behance.net/gallery/242318297/Book-Illustration",
    },
    {
      title: "Characters and concept",
      image: illustration2,
      link: "https://www.behance.net/gallery/213088483/Characters-and-Concept-Art",
    },
    {
      title: "Earthly and Engineered",
      image: illustration3,
      link: "https://www.behance.net/gallery/213097939/Earthly-and-Engineered",
    },
  ],
};

const ArtWorks = () => {
  const [activeId, setActiveId] = useState(null);

  const handleCardClick = (work) => {
    if (modalData[work.id]) {
      setActiveId(work.id);
    } else if (work.link) {
      window.open(work.link, "_blank");
    }
  };

  const items = modalData[activeId] || [];

  return (
    <section
      id="artworks"
      className="min-h-screen px-6 md:px-16 lg:px-28 py-24 relative overflow-hidden"
    >
      {/* Heading */}
      <h2 className="absolute top-2 left-6 md:left-16 text-[4rem] md:text-[9rem] font-bold tracking-widest text-black/10">
        Art Works
      </h2>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mt-25 md:mt-34">
        {works.map((work) => (
          <div
            key={work.id}
            onClick={() => handleCardClick(work)}
            className="cursor-pointer border border-black/20 p-8 transition-all duration-300
            hover:scale-[1.04] hover:-translate-y-2 hover:shadow-xl"
          >
            <h3 className="text-md tracking-wide">{work.title}</h3>

            <img
              src={work.image}
              alt={work.title}
              className="my-6 w-full h-40 sm:h-30 object-cover object-fill"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeId && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto px-4 py-10">
          <div className="bg-white w-full max-w-4xl mx-auto p-8 md:p-12 relative">

            {/* Close */}
            <button
              onClick={() => setActiveId(null)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h3 className="text-2xl tracking-widest mb-10 text-center">
              {works.find((w) => w.id === activeId)?.title}
            </h3>

            {/* MODAL GRID */}
            <div
              className={`grid gap-6 justify-center
                ${
                  items.length === 1
                    ? "grid-cols-1"
                    : items.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                }
              `}
            >
              {items.map((item, index) => (
                <div
                  key={index}
                  className="border border-black/20 p-6 w-full max-w-sm mx-auto"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-65 object-contain mb-4"
                  />

                  <p className="text-sm tracking-wide mb-3 text-center">
                    {item.title}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-xs underline tracking-widest"
                  >
                    View Work
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-10 left-0 w-full border-t border-black/20 rotate-[2deg]" />
    </section>
  );
};

export default ArtWorks;

