import React from 'react';

const Footer = () => {
  return (
    <div className='
      grid
      grid-cols-1
      md:grid-cols-4
      gap-y-10
      px-32
      py-14
      bg-gray-100
      text-gray-600
      left-12
    '>
      <div className='
        space-y-4
        text-xs
        text-gray-800
      '>
        <h5 className='
          font-bold
        '>
          ABOUT
        </h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className='
        space-y-4
        text-xs
        text-gray-800
      '>
        <h5 className='
          font-bold
        '>
          COMMUNITY
        </h5>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>It's a clone</p>
        <p>Referrals accepted</p>
        <p>JWH</p>
      </div>

      <div className='
        space-y-4
        text-xs
        text-gray-800
      '>
        <h5 className='
          font-bold
        '>
          HOST
        </h5>
        <p>This has all been</p>
        <p>An elaborate tutorial</p>
        <p>To practice Next.js</p>
        <p>And Tailwind CSS</p>
        <p>But has still been fun</p>
      </div>

      <div className='
        space-y-4
        text-xs
        text-gray-800
      '>
        <h5 className='
          font-bold
        '>
          SUPPORT
        </h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Hello</p>
        <p>Easter eggs</p>
        <p>For the win</p>
      </div>

      {/* <div className='
        space-y-4
        text-xs
        text-gray-800
      '>
        <h5 className='
          font-bold
        '>
          About
        </h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div> */}
    </div>
  )
}

export default Footer;