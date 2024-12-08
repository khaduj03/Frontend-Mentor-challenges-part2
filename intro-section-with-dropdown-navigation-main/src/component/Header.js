import React, { useState } from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-screen h-14 flex justify-between p-8">
      <div className="flex flex-row space-x-10 lg:ml-6">
        <img className="w-20 h-8" src="/images/logo.svg" alt="logo" />
        <nav className=" hidden  space-x-10 lg:flex">
          <Menu />
        </nav>
      </div>
      <div className="lg:flex hidden  space-x-7 mr-20">
        <p>
          <a href="#" className="text-gray-500 hover:text-black">Login</a>
        </p>
        <p className="border w-24 h-10 border-gray-500 hover:border-black rounded-xl justify-center items-center flex relative bottom-1 ">
          <a href="#" className="text-gray-500 hover:text-black">Ragister</a>
        </p>
      </div>
      <div className="lg:hidden">
        <button onClick={handleMenu}>
          <img src="images/icon-menu.svg" alt="" />
        </button>
      </div>

      {toggle && (
        <div className="w-screen lg:hidden fixed inset-0 h-screen bg-opacity-60 bg-black ">
          <motion.div
            initial={{ x: "100%" }} 
            animate={{ x: toggle ? 0 : "100%" }}
            exit={{ x: "100%" }} 
            transition={{ type: "spring", stiffness: 250, damping: 30 }} 
            className="fixed top-0 right-0 w-72 h-screen bg-white"
          >
            <button
              className="w-full h-16 flex p-10 justify-end items-center"
              onClick={handleMenu}
            >
              <img
                className="w-7 h-7"
                src="/images/icon-close-menu.svg"
                alt="close menu"
              />
            </button>
            <nav className="p-6 space-y-4">
              <Menu />
            </nav>
            <div className="flex w-full justify-center items-center  flex-col space-y-3 ">
              <p  className="text-gray-500 hover:text-black">
                <a href="#">Login</a>
              </p>
              <p className="border w-52 h-10 text-gray-500 hover:text-black border-black rounded-xl justify-center items-center flex relative bottom-1 ">
                <a href="#">Ragister</a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Header;
