import React, { useState } from "react";
import { Menu, X } from "lucide-react";

// Функция плавного скролла
const handleScrollTo = (id, closeMenu) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    if (closeMenu) closeMenu(false);
  }
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-6 md:px-8">
      <div className="flex items-center shadow-md w-full py-3 px-0 rounded-none justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo-enactus.png" alt="enactus-logo" width="70px" />
          <span className="text-xl font-medium font-Poppins ml-2">
            EcoPakhta
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-11">
          <li>
            <button
              className="hover:text-[#18098a] transition bg-transparent border-none outline-none cursor-pointer"
              onClick={() => handleScrollTo("home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className="hover:text-[#18098a] transition bg-transparent border-none outline-none cursor-pointer"
              onClick={() => handleScrollTo("forWhom")}
            >
              Advantages
            </button>
          </li>
          <li>
            <button
              className="hover:text-[#18098a] transition bg-transparent border-none outline-none cursor-pointer"
              onClick={() => handleScrollTo("innovation")}
            >
              Innovation
            </button>
          </li>
          <li>
            <button
              className="hover:text-[#18098a] transition bg-transparent border-none outline-none cursor-pointer"
              onClick={() => handleScrollTo("profitability")}
            >
              Profitability
            </button>
          </li>
        </ul>

        {/* Button (Desktop) */}
        <button
          className="hidden md:block bg-[#18098a] text-white px-6 py-3 rounded-full hover:shadow-lg hover:translate-y-[-2px] hover:opacity-90 transition-all duration-300"
          onClick={() => handleScrollTo("contact-us")}
        >
          Contact us
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-[60px] left-0 w-full flex flex-col items-center py-5 z-50">
          <button
            className="py-2 hover:text-[#18098a] bg-transparent border-none outline-none cursor-pointer"
            onClick={() => handleScrollTo("home", setIsOpen)}
          >
            Home
          </button>
          <button
            className="py-2 hover:text-[#18098a] bg-transparent border-none outline-none cursor-pointer"
            onClick={() => handleScrollTo("aboutProduct", setIsOpen)}
          >
            About product
          </button>
          <button
            className="py-2 hover:text-[#18098a] bg-transparent border-none outline-none cursor-pointer"
            onClick={() => handleScrollTo("forWhom", setIsOpen)}
          >
            Advantages
          </button>
          <button
            className="py-2 hover:text-[#18098a] bg-transparent border-none outline-none cursor-pointer"
            onClick={() => handleScrollTo("innovation", setIsOpen)}
          >
            Innovation
          </button>
          <button
            className="py-2 hover:text-[#18098a] bg-transparent border-none outline-none cursor-pointer"
            onClick={() => handleScrollTo("profitability", setIsOpen)}
          >
            Profitability
          </button>
          <button
            className="py-2 hover:text-[#18098a] bg-transparent border-none outline-none cursor-pointer"
            onClick={() => handleScrollTo("contact-us", setIsOpen)}
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
