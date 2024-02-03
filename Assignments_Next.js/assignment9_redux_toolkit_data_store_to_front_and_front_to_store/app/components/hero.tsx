import React from 'react'
import Image from 'next/image';
import HeroBigImage from '@/public/2Hero.jpg'
import FormForData from './formForData';
import ServiceSlice from '@/store/slices/serviceSlice';

const Hero = () => {
  return (
    <div>
      <div className="absolute w-full border border-3 border-black  bg-gradient-to-b from-rose-300 to-green-300">
        <Image
          src={HeroBigImage}
          alt="Hero Image"
          className="w-full h-[500px] bg-center bg-no-repeat bg-cover relative opacity-65"
        />
        <span className="text-4xl text-black  text-center absolute top-[50%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 ">
          <div className='grid grid-rows-2'>
            <FormForData />
            
          </div>
          <div className="text-stone-950">
            Use Redux Toolkit
            <br /> Make a Form
          </div>
        </span>
      </div>
    </div>
  );
}

export default Hero;