import React from 'react'
import Image from 'next/image';
import ImageOne from '@/public/pngA2.png'
import ImageTwo from '@/public/pngA3.png'
import ImageThree from '@/public/pngA4.png'
import ImageFour from '@/public/pngA5.png'
import ImageFive from '@/public/A6.png'


const GridLayout = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 m-12  ">
        <div className="relative h-64 border-2 border-black lg:col-span-2 md:col-span-2 sm:col-span-full">
          <Image src={ImageOne} fill alt="imageA" />
        </div>

        <div className="relative min-h-64 border-2 border-black lg:row-span-2 md:row-span-2 sm:row-span-1">
          <Image src={ImageTwo} fill alt="imageB" />
        </div>

        <div className="relative min-h-64 border-2 border-black lg:row-span-2 md:row-span-2 sm:row-span-1">
          <Image src={ImageThree} fill alt="imageB" />
        </div>

        <div className="relative h-64 border-2 border-black ">
          <Image src={ImageFour} fill alt="imageB"  />
        </div>

        <div className="relative h-64 border-2 border-black lg:col-span-2 md:col-span-2 sm:col-span-full">
          <Image src={ImageFive} fill alt="imageB"  />
        </div>
      </div>
    </div>
  );
}

export default GridLayout