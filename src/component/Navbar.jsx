import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiLinkedin } from "react-icons/fi";


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "writeups", title: "WriteUps" },
    { id: "artworks", title: "ArtWorks"},
    { id: "featuredWork", title: "Featured Work" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 tracking-widest text-black/60 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[13vw] font-light  ${isScrolled ? "bg-white py-3" : "bg-transparent py-5"
        }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-black">HJN</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black text-md">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer transition-all duration-200 hover:font-semibold ${activeSection === item.id ? "text-black" : "font-light"
                }`}

            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.title}
              </button>
            </li>
          ))}

        </ul>


        {/* Mobile Menu Toggle */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-6 text-black">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer transition-all duration-200 hover:font-semibold ${activeSection === item.id ? "font-semibold text-black" : "font-light"
                  }`}

              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
