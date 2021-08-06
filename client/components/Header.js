// Dependencies
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='
      sticky 
      top-0 
      z-50 
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

      {/* middle div */}

      {/* right div */}

    </header>
  )
}

export default Header;