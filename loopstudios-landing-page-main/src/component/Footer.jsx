import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black flex lg:flex-row flex-col justify-between py-10' role="contentinfo">
      <div>
        <img 
          src="/images/logo.svg" 
          alt="Loopstudios Logo" 
          className=' py-6 px-20' 
        />
        <ul 
          className='flex flex-col lg:flex-row lg:space-x-14 lg:items-start items-center lg:space-y-0 space-y-7 text-white py-10 px-20' 
          aria-label="Footer navigation"
        >
          <li><a href="#" aria-label="About Loopstudios">About</a></li>
          <li><a href="#" aria-label="Careers at Loopstudios">Careers</a></li>
          <li><a href="#" aria-label="Upcoming events at Loopstudios">Events</a></li>
          <li><a href="#" aria-label="Products offered by Loopstudios">Products</a></li>
          <li><a href="#" aria-label="Customer support at Loopstudios">Support</a></li>
        </ul>
      </div>
      <div className='py-9 flex justify-center items-center flex-col'>
        <div className='flex space-x-10 px-20 py-6'>
          <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <img 
              src="/images/icon-facebook.svg" 
              alt="Facebook Icon" 
              className="w-6 h-6" 
            />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <img 
              src="/images/icon-twitter.svg" 
              alt="Twitter Icon" 
              className="w-6 h-6" 
            />
          </a>
          <a href="https://www.pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">
            <img 
              src="/images/icon-pinterest.svg" 
              alt="Pinterest Icon" 
              className="w-6 h-6" 
            />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <img 
              src="/images/icon-instagram.svg" 
              alt="Instagram Icon" 
              className="w-6 h-6" 
            />
          </a>
        </div>
        <p className='text-gray-500'>&copy; 2021 Loopstudios. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
