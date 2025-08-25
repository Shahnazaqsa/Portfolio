import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-cyan-400">
          <span className="text-xl font-bold">&lt;AQSACODES/&gt;</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item}`}
                className="text-white hover:text-cyan-300"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-1 m-[-3px] bg-cyan-300 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-cyan-950 px-6 py-4 space-y-4 text-center animate-slideDown">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="block text-white hover:text-cyan-300"
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
