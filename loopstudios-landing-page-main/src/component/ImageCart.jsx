import React from 'react'

const ImageCart = ({ url, name }) => {
  return (
    <figure className='rounded-lg relative w-[240px] h-[340px] hover:shadow-none shadow-md shadow-gray-500'>
      <img
        src={url}
        alt={name}
        className='rounded-lg w-[240px] h-[340px]'
        role="img"
        aria-labelledby="image-name" 
      />
      <div className='absolute inset-0 bg-opacity-30 hover:bg-opacity-0 cursor-pointer transition-all duration-300 ease-in-out bg-black rounded-lg flex items-end'>
        <figcaption id="image-name" className='text-white uppercase text-4xl font-thin p-6'>
          {name}
        </figcaption>
      </div>
    </figure>
  )
}

export default ImageCart
