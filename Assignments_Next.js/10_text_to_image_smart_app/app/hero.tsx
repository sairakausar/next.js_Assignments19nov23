import React from 'react'
import Image from 'next/image'
import OneHeroImage from '@/public/OneHeroBig.jpg'

const Hero = () => {
  return (
    <div className="h-[600px] bg-center bg-no-repeat bg-cover relative ">
          <Image src={OneHeroImage} alt="Hero" fill className="opacity-50 z-10" />
          <div className='bg-gradient-to-tr from-red-800 to-blue-600 z-20 h-full' ></div>
      <div className="z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl">
        <h1>I am John Doe</h1>
        <p>And I'm a Photographer</p>
        <button>Hire me</button>
      </div>
    </div>
  );
}

export default Hero

// {
//   background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("photographer.jpg");
//   height: 50%;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   position: relative;