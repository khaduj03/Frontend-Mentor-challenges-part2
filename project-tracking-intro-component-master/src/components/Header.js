import React, { useState } from 'react'
import { motion } from "framer-motion";

const Header = () => {
    const [toggleMenu,setToggleMenu]=useState(false)

    const handleToggleMenu=()=>{
        setToggleMenu(!toggleMenu)
    }
  return (
    <header  className="w-screen justify-between flex lg:p-14 p-10   overflow-x-hidden">
    <div>
      <img
        className="lg:ml-20 flex w-6 "
        src="/images/logo.svg" alt="logo"/>
    </div>

<div className="flex-row w-[400px] lg:flex hidden space-x-28 mr-10 uppercase font-semibold">
  <nav className="space-x-5 flex flex-row text-xs tracking-tighter">
    {["Product", "Features", "Pricing"].map((item, index) => (
      <a
        key={index}
        href="#"
        className="relative group"
      >
        {item}
        <span
          className="absolute left-0 bottom-0 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"
        ></span>
      </a>
    ))}
  </nav>
  <a href="#" className="text-gray-500 text-xs hover:text-black">
    Login
  </a>
</div>


    <div className="lg:hidden flex w-fit">
      <img
      className='z-20'
        onClick={handleToggleMenu}
        src={toggleMenu ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}
        alt="Menu toggle button"
      />
    </div>
    
    {toggleMenu&&
    (
      <div className='absolute z-10 w-screen screen inset-0 flex justify-center items-start'>
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: 0.1, ease: "linear" }}
     className='relative space-y-5 flex-col uppercase top-20  w-[340px] m-2 h-[270px] font-bold text-2xl rounded-md shadow-2xl flex justify-center items-center bg-white'>
      <nav className="flex flex-col text-center tracking-tighter space-y-5">
        <a href="#" >Product</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
      </nav>
      <a href="#" className="text-gray-500 flex justify-center items-center  w-[300px] border-t border-gray-400 pt-6"> Login</a>


    </motion.div>
    </div>
    )}


    </header>
  )
}

export default Header
