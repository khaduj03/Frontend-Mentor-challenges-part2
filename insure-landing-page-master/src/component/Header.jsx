import React, { useState } from 'react'

const Header = () => {
  const [menu,setMenu]=useState(false)

  return (
    <header className='w-full flex justify-between p-5 uppercase text-gray-400'>
        <div className='flex justify-center items-center lg:ml-20'><img src="/images/logo.svg" alt="" /></div>
        <nav className='lg:flex space-x-8  mr-20 tracking-wider hidden ' >
            <ul className='flex space-x-8'>
                <li>How we work</li>
                <li>Blog</li>
                <li>Account</li>
            </ul>
            <button className=' uppercase border text-black border-black  px-10'>View plans</button>
        </nav>
        <button
          className="md:hidden relative w-8 h-8 z-10"
          onClick={() => setMenu(!menu)}
        >
          <span className={`absolute w-full h-0.5 bg-black transition-all duration-300 ease-in-out ${menu ? 'rotate-45 top-3' : 'rotate-0 top-0'}`}></span>
          <span className={`absolute w-full h-0.5 bg-black  transition-all duration-300 ease-in-out top-3 ${menu ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute w-full h-0.5 bg-black  transition-all duration-300 ease-in-out ${menu ? '-rotate-45 top-3' : 'rotate-0 top-6'}`}></span>
        </button>

        <div
  className={`absolute inset-0 w-full h-screen bg-opacity-40 bg-[#2d2640] flex justify-center items-start transition-all duration-500 ease-in-out ${
    menu ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  <div
    className={`w-screen h-[65%] bg-[#2d2640] mt-20 transform transition-transform duration-500 ease-in-out ${
      menu ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <ul className='flex uppercase flex-col justify-center items-center space-y-5 text-xl text-white mt-14 '>
      <li>How we work</li>
      <li>Blog</li>
      <li>Account</li>
      <button className="border border-white px-8 py-3 cursor-pointer hover:bg-white hover:text-[#2d2640] hover:shadow-lg transition-all duration-300 ease-in-out">
  View plans
</button>

    </ul>
    <img src="/images/bg-pattern-mobile-nav.svg"
    className='absolute w-screen bottom-0'
     alt="" />
  </div>

</div>

    </header>
  )
}

export default Header
