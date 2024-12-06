import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-800 flex flex-row justify-between w-full h-20 pt-5'>
      <div>
        <img 
        className='w-32 h-10 ml-10'
        src="/images/logo.svg" alt="logo_image" />
      </div>
      <ul className='flex space-x-10 mr-10  text-gray-300 font-thin'>
        <li className='cursor-pointer hover:text-white '>Features</li>
        <li className='cursor-pointer hover:text-white'>Team</li>
        <li className='cursor-pointer hover:text-white '>Sign In</li>
      </ul>
    </div>
  )
}

export default Header
