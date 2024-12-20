import React from 'react'

const Features = () => {
  return (
    <section className="px-20 py-32 pt-80 text-start">
     <span className='w-32 h-20 flex  border-t border-t-black '></span>
    <h3 className="font-dm-serif text-72px font-bold leading-64px">We’re different</h3>
    <div className="grid lg:grid-cols-3 gap-8 mt-20">
      <div className="space-y-7 flex justify-center items-start flex-col">
        <img src="/images/icon-snappy-process.svg" alt="" />
        <h4 className="font-semibold text-3xl  font-dm-serif ">Snappy Process</h4>
        <p className='text-base font-normal text-gray-400'>
          Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.
        </p>
      </div>
      <div className="space-y-7 flex justify-center items-start  flex-col">
        <img src="/images/icon-affordable-prices.svg" alt="" />
        <h4 className="font-semibold text-3xl  font-dm-serif ">Affordable Prices</h4>
        <p className='text-base font-normal text-gray-400'>
          We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.
        </p>
      </div>
      <div className="space-y-7 flex justify-center items-start  flex-col">
        <img src="/images/icon-people-first.svg" alt="" />
        <h4 className="font-semibold text-3xl  font-dm-serif ">People First</h4>
        <p className='text-base font-normal text-gray-400'>
          Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.
        </p>
      </div>
    </div>
    {/* Call to Action Section */}
    <section className="bg-gray-800 mt-40 overflow-hidden relative flex justify-between items-center text-white px-6  text-center">
        <img
        className='absolute top-0 right-0'
         src="/images/bg-pattern-how-we-work-desktop.svg" alt="" />
        <h3 className=" font-dm-serif text-6xl font-bold mb-4 text-start p-14">Find out more<br/> about how we work</h3>
        <button className="border border-white px-8 py-3 cursor-pointer hover:bg-white hover:text-[#2d2640] hover:shadow-lg transition-all duration-300 ease-in-out mr-20">How We Work</button>
      </section>
  </section>
  )
}

export default Features
