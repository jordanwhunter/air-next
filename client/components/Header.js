// Dependencies
import React from 'react';
import Image from 'next/image';

// Icons
import { SearchIcon } from '@heroicons/react/solid';

const Header = () => {
  return (
    <header className='
      sticky 
      top-0 
      z-50
      grid
      grid-cols-3 
      bg-white 
      shadow-md 
      py-5 
      px-5
      md:px-10
    '>

      {/* left div */}
      <div className='
        relative 
        flex 
        items-center 
        h-10 
        cursor-pointer 
        my-auto
      '>
        {/* Because of server-side image rendering baked into Next.js, we have to essentially whitelist the source that the images come from. This is done in the next.config.js file that we create */}
        <Image 
          src='https://links.papareact.com/qd3'
          alt='Airbnb Logo'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* middle div - ICONS ARE TECHNICALLY TEXT so they can be styled as such in Tailwind */}
      <div className='
        flex
        items-center
        md: border-2
        rounded-full
        py-2
        md:shadow-sm
      '>
        <input 
          type='text' 
          placeholder='Start you search...' 
          className='
            pl-3
            bg-transparent
            outline-none
            flex-grow
            text-sm
            text-gray-600
            placeholder-gray-400
          '
        />
        <SearchIcon className='
          hidden
          md:inline-flex
          h-8
          bg-red-400
          text-white
          rounded-full
          p-2
          cursor-pointer
          md:mx-2
        '/>
      </div>
      {/* right div */}

    </header>
  )
}

export default Header;