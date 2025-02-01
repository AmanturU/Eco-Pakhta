import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full px-6 md:px-8">
      <div className="flex items-center shadow-md w-full py-3 px-0 rounded-none justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo-enactus.png" alt="enactus-logo" width="70px" />
          <span className="text-xl font-medium font-Poppins ml-2">EcoPakhta</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-11">
          <li>
            <a href="#home" className="hover:text-[#18098a] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutProduct" className="hover:text-[#18098a] transition">
              About product
            </a>
          </li>
          <li>
            <a href="#forWhom" className="hover:text-[#18098a] transition">
              For whom
            </a>
          </li>
          <li>
            <a href="#aboutUs" className="hover:text-[#18098a] transition">
              About Us
            </a>
          </li>
        </ul>

        {/* Button (Desktop) */}
        <button className="hidden md:block bg-[#18098a] text-white px-6 py-3 rounded-full hover:shadow-lg hover:translate-y-[-2px] hover:opacity-90 transition-all duration-300">
          Contact us
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-[60px] left-0 w-full flex flex-col items-center py-5">
          <a href="#home" className="py-2 hover:text-[#18098a]" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#aboutProduct" className="py-2 hover:text-[#18098a]" onClick={() => setIsOpen(false)}>
            About product
          </a>
          <a href="#forWhom" className="py-2 hover:text-[#18098a]" onClick={() => setIsOpen(false)}>
            For whom
          </a>
          <a href="#aboutUs" className="py-2 hover:text-[#18098a]" onClick={() => setIsOpen(false)}>
            About Us
          </a>
          <button className="mt-3 bg-[#18098a] text-white px-6 py-3 rounded-full hover:shadow-lg hover:translate-y-[-2px] hover:opacity-90 transition-all duration-300">
            Contact us
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
