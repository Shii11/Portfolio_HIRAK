import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const menuItems = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "writeups", title: "WriteUps" },
    { id: "artworks", title: "ArtWorks" },
    { id: "featuredWork", title: "Featured Work" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-white py-3" : "bg-transparent py-5"}
        px-6 md:px-12 lg:px-20`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          
          {/* Logo */}
          <div className="text-lg font-semibold tracking-widest text-black">
            HJN
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 text-sm tracking-widest text-black/70">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="cursor-pointer hover:text-black transition"
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>

            {/* CV Button */}
            <a
              href="https://drive.google.com/file/d/1mFdG8NwvXJL8zBGN1pvyhwhFKWADwSd6/view?usp=sharing"
              download
              className="px-5 py-2 border border-black text-xs tracking-widest
              transition-all hover:bg-black hover:text-white active:scale-95"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>
      </nav>

      {/* MOBILE SLIDE MENU (RIGHT SIDE) */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300
        ${isOpen ? "visible" : "invisible"}`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity
          ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Side Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white
          p-8 flex flex-col gap-6 tracking-widest text-sm
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuItemClick(item.id)}
              className="text-left hover:font-semibold transition"
            >
              {item.title}
            </button>
          ))}

          <a
            href="https://drive.google.com/file/d/1mFdG8NwvXJL8zBGN1pvyhwhFKWADwSd6/view?usp=sharing"
            download
            className="mt-6 inline-block border border-black px-6 py-3 text-center
            hover:bg-black hover:text-white transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
