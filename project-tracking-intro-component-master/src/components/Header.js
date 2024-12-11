import React from 'react'

const Header = () => {
  return (
    <div  className="w-full justify-between flex lg:p-14 p-10  ">
    <div>
      <img
        className="lg:ml-20 flex w-6 "
        src="/images/logo.svg" alt="logo"/>
    </div>
    <div className="flex-row w-[400px] lg:flex hidden space-x-28 mr-10 uppercase font-semibold">
      <nav className="space-x-5 flex flex-row text-xs tracking-tighter">
        <a href="#">Product</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
      </nav>
      <a href="#" className="text-gray-500 text-xs"> Login</a>
    </div>

    <div className='lg:hidden flex '>
        <img src="/images/icon-hamburger.svg" alt="icon-hamburger" />
    </div>

    </div>
  )
}

export default Header
