import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    // Focus management when menu opens
    if (menu) {
      menuRef.current.focus();
    }
  }, [menu]);

  return (
    <header className="w-full flex justify-between p-5 uppercase text-gray-400">
      {/* Logo */}
      <div className="flex justify-center items-center lg:ml-20">
        <img src="/images/logo.svg" alt="Company logo" />
      </div>

      {/* Navigation for larger screens */}
      <nav
        className="lg:flex space-x-8 mr-20 tracking-wider hidden"
        aria-label="Main navigation"
      >
        <ul className="flex space-x-8">
          <li>
            <a href="#how-we-work" className="hover:text-gray-600">
              How we work
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-600">
              Blog
            </a>
          </li>
          <li>
            <a href="#account" className="hover:text-gray-600">
              Account
            </a>
          </li>
        </ul>
        <button
          className="uppercase border text-black border-black px-10"
          aria-label="View plans"
        >
          View plans
        </button>
      </nav>

      {/* Hamburger button for mobile menu */}
      <button
        className="md:hidden relative w-8 h-8  mr-2 z-50"
        onClick={() => setMenu(!menu)}
        aria-expanded={menu}
        aria-label={menu ? 'Close menu' : 'Open menu'}
      >
        <span
          className={`absolute w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${
            menu ? 'rotate-45 top-3' : 'rotate-0 top-0'
          }`}
        ></span>
        <span
          className={`absolute w-full h-0.5 bg-black  transition-all duration-300 ease-in-out top-3 ${
            menu ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`absolute w-full h-0.5 bg-black  transition-all duration-300 ease-in-out ${
            menu ? '-rotate-45 top-3' : 'rotate-0 top-6'
          }`}
        ></span>
      </button>

      {/* Mobile menu */}
      <div
        className={`absolute inset-0  z-40 w-full h-screen bg-opacity-40 bg-[#2d2640] flex justify-center items-start transition-all duration-500 ease-in-out ${
          menu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-hidden={!menu}
        ref={menuRef}
        tabIndex={-1}
      >
        <div
          className={`w-screen h-[65%] bg-[#2d2640] mt-20 transform transition-transform duration-500 ease-in-out ${
            menu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul
            className="flex uppercase flex-col justify-center items-center space-y-5 text-xl text-white mt-14"
            aria-label="Mobile navigation"
          >
            <li>
              <a href="#how-we-work" className="hover:text-gray-300">
                How we work
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-gray-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#account" className="hover:text-gray-300">
                Account
              </a>
            </li>
            <button
              className="border border-white px-8 py-3 cursor-pointer hover:bg-white hover:text-[#2d2640] hover:shadow-lg transition-all duration-300 ease-in-out"
              aria-label="View plans"
            >
              View plans
            </button>
          </ul>
          <img
            src="/images/bg-pattern-mobile-nav.svg"
            className="absolute w-screen bottom-0"
            alt="Background pattern for navigation"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
