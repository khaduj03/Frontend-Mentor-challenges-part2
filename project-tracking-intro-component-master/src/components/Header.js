import React from 'react'

const Header = () => {
  return (
    <div  className="w-full justify-between flex p-14  ">
    <div>
      <img
        className="ml-20 flex "
        src="/images/logo.svg" alt="logo"/>
    </div>
    <div className="flex-row w-[400px] flex space-x-28 mr-10 uppercase font-bold">
      <nav className="space-x-5 flex flex-row">
        <a href="#">Product</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
      </nav>
      <a href="#" className="text-gray-500"> Login</a>
    </div>
    </div>
  )
}

export default Header
