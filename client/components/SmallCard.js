// Dependencies
import React from 'react';
import Image from 'next/image';

const SmallCard = ({ location, img, distance }) => {
  return (
    <div className='
      flex
      items-center
      m-2
      mt-5
      space-x-4
      rounded-xl
      cursor-pointer
      hover:bg-gray-100
      hover:scale-105
      transition
      transform
      duration-200
      ease-out
    '>
      {/* left hand div */}
      <div className='
        relative
        h-16
        w-16
      '>
        <Image 
          src={img}
          layout='fill'
          objectFit='contain'
          className='rounded-lg'
        />
      </div>

      {/* right hand div */}
      <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard;