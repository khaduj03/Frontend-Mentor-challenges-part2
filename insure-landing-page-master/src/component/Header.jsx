import React from 'react'

const Header = () => {
  return (
    <header className='w-full flex justify-between p-5 uppercase text-gray-400'>
        <div className='flex justify-center items-center ml-20'><img src="/images/logo.svg" alt="" /></div>
        <nav className='flex space-x-8  mr-20 tracking-wider' >
            <ul className='flex space-x-8'>
                <li>How we work</li>
                <li>Blog</li>
                <li>Account</li>
            </ul>
            <button className=' uppercase border text-black border-black  px-10'>View plans</button>
        </nav>
    </header>
  )
}

export default Header
