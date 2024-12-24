import React from 'react'
import images from './imagesData'
import ImageCart from './ImageCart'

const Creations = () => {
  return (
    <div className='flex flex-col justify-center items-center px-28'>
      <div className='flex justify-between w-full py-20'>
        <h1 className='text-4xl uppercase font-thin' id="creations-heading">
          Our Creations
        </h1>
        <button
          className='border border-black px-8 tracking-widest font-semibold uppercase'
          aria-label="See all creations"
        >
          See All
        </button>
      </div>
      <div className='grid grid-cols-4 gap-7'>
        {images && images.map((item, index) => (
          <div key={index} role="img" aria-labelledby={`image-${index}`}>
            <ImageCart 
              url={item.img} 
              name={item.name}
              altText={item.name || 'Image description not available'}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Creations
