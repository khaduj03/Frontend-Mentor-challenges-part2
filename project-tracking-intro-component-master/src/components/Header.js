import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="w-screen justify-between flex lg:p-14 p-10 overflow-x-hidden">
      {/* Logo Section */}
      <div>
        <a href="/" aria-label="Go to homepage">
          <img
            className="lg:ml-20 flex w-6"
            src="/images/logo.svg"
            alt="Website logo"
          />
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="flex-row w-[400px] lg:flex hidden space-x-28 mr-10 uppercase font-semibold">
        <nav className="space-x-5 flex flex-row text-xs tracking-tighter">
          {["Product", "Features", "Pricing"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="relative group"
              aria-label={`Navigate to ${item}`}
            >
              {item}
              <span
                className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              ></span>
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="text-gray-500 text-xs hover:text-black"
          aria-label="Login"
        >
          Login
        </a>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden flex w-fit">
        <button
          aria-label={toggleMenu ? "Close menu" : "Open menu"}
          onClick={handleToggleMenu}
          className="z-20"
        >
          <img
            src={
              toggleMenu ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"
            }
            alt=""
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div
          className="absolute z-10 w-screen inset-0 flex justify-center items-start"
          role="dialog"
          aria-labelledby="mobile-menu-title"
          aria-modal="true"
        >
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
            className="relative space-y-5 flex-col uppercase top-20 w-[340px] m-2 h-[270px] font-bold text-2xl rounded-md shadow-2xl flex justify-center items-center bg-white"
          >
            <nav
              className="flex flex-col text-center tracking-tighter space-y-5"
              aria-label="Mobile menu"
            >
              <a href="#" aria-label="Navigate to Product">
                Product
              </a>
              <a href="#" aria-label="Navigate to Features">
                Features
              </a>
              <a href="#" aria-label="Navigate to Pricing">
                Pricing
              </a>
            </nav>
            <a
              href="#"
              className="text-gray-500 flex justify-center items-center w-[300px] border-t border-gray-400 pt-6"
              aria-label="Login"
            >
              Login
            </a>
          </motion.div>
        </div>
      )}
    </header>
  );
};

export default Header;
