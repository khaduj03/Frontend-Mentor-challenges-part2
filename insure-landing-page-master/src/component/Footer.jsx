import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 px-6 py-12 relative flex justify-center items-center flex-col">
        <img 
        className='absolute left-0 top-0'
        src="/images/bg-pattern-footer-desktop.svg" alt="" />
    <div className='w-[90%] border-b border-b-gray-400 justify-between flex p-7 '>
    <img src="/images/logo.svg" alt="" />
    <div className='flex space-x-4'>
        <img src="/images/icon-facebook.svg" alt="" />
        <img src="/images/icon-twitter.svg" alt="" />
        <img src="/images/icon-pinterest.svg" alt="" />
        <img src="/images/icon-instagram.svg" alt="" />
    </div>
    </div>

    <div className="flex flex-row space-x-40 items-start w-full pl-20 ">
      <div>
        <h4 className="font-bold  text-gray-400 tracking-wider">OUR COMPANY</h4>
        <ul className="mt-4 uppercase tracking-wider ">
          <li><a href="#" className="hover:underline">How We Work</a></li>
          <li><a href="#" className="hover:underline">Why Insure?</a></li>
          <li><a href="#" className="hover:underline">View Plans</a></li>
          <li><a href="#" className="hover:underline">Reviews</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold  text-gray-400 tracking-wider">HELP ME</h4>
        <ul className="mt-4 uppercase tracking-wider">
          <li><a href="#" className="hover:underline">FAQ</a></li>
          <li><a href="#" className="hover:underline">Terms of Use</a></li>
          <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          <li><a href="#" className="hover:underline">Cookies</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold  text-gray-400 tracking-wider">CONTACT</h4>
        <ul className="mt-4 uppercase tracking-wider ">
          <li><a href="#" className="hover:underline">Sales</a></li>
          <li><a href="#" className="hover:underline">Support</a></li>
          <li><a href="#" className="hover:underline">Live Chat</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold  text-gray-400 tracking-wider">OTHERS</h4>
        <ul className="mt-4 uppercase tracking-wider ">
          <li><a href="#" className="hover:underline">Careers</a></li>
          <li><a href="#" className="hover:underline">Press</a></li>
          <li><a href="#" className="hover:underline">Licenses</a></li>
        </ul>
      </div>
    </div>
    <div className="mt-12 text-center">
      <p>&copy; 2024 Insure. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
