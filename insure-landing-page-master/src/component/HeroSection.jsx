import React from 'react'

const HeroSection = () => {
  return (
    <section className=' bg-[#2d2640] text-white flex relative p-5'>
        <img 
        className='absolute  top-0 right-0 z-10'
        src="/images/bg-pattern-intro-right-desktop.svg" alt="" />
        <div className='flex-1 p-12'> 
            <span className='w-32 h-20 flex  border-t border-t-white mt-10'></span>
            <h1 className="font-dm-serif text-72px font-bold leading-64px text-white">Humanizing <br/>your insurance.</h1>
            <p className='text-lg mt-5 font-normal'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
            <button className=' uppercase border mt-10 text-white border-white  px-10'>View plans</button>
        </div>

        <div className='flex-1'>
            <img 
            className='absolute top-10 right-10'
        src="/images/image-intro-desktop.jpg" alt="" /></div>
      
    </section>
  )
}

export default HeroSection
