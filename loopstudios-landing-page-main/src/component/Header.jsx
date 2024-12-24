import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="flex justify-between lg:p-16 p-10 lg:px-32"
      role="banner"
    >
      <div className="z-50">
        <img src="/images/logo.svg" alt="Company Logo" />
      </div>

      {/* Main Navigation (Desktop View) */}
      <nav
        className="lg:flex hidden font-josefin text-sm leading-normal flex-row list-none text-white space-x-7"
        aria-label="Main navigation"
      >
        <li className="relative group">
          <a href="#about" className="block py-2">
            About
            {/* Bottom line */}
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
          </a>
        </li>
        <li className="relative group">
          <a href="#careers" className="block py-2">
            Careers
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
          </a>
        </li>
        <li className="relative group">
          <a href="#events" className="block py-2">
            Events
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
          </a>
        </li>
        <li className="relative group">
          <a href="#products" className="block py-2">
            Products
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
          </a>
        </li>
        <li className="relative group">
          <a href="#support" className="block py-2">
            Support
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-white transform scale-x-0 transition-all duration-300 ease-in-out group-hover:scale-x-100"></span>
          </a>
        </li>
      </nav>

      {/* Hamburger Button */}
      <button
        className="lg:hidden relative w-8 h-8 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen ? "true" : "false"}
      >
        <span
          className={`absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 top-3" : "rotate-0 top-0"
          }`}
        ></span>
        <span
          className={`absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out top-3 ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute w-full h-0.5 bg-white transition-all duration-300 ease-in-out ${
            isMenuOpen ? "-rotate-45 top-3" : "rotate-0 top-6"
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="absolute w-screen h-screen z-40 inset-0 bg-black p-10 flex opacity-0 translate-y-4 transition-all duration-500 ease-in-out"
          style={{ animation: "fadeInSlideUp 0.5s forwards" }}
          role="dialog"
          aria-hidden={isMenuOpen ? "false" : "true"}
          tabIndex={isMenuOpen ? "0" : "-1"}
        >
          <nav className="font-josefin text-xl leading-normal list-none mt-44 text-white uppercase">
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li className="mt-6">
                <a href="#careers">Careers</a>
              </li>
              <li className="mt-6">
                <a href="#events">Events</a>
              </li>
              <li className="mt-6">
                <a href="#products">Products</a>
              </li>
              <li className="mt-6">
                <a href="#support">Support</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
