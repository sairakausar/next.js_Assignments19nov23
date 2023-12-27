'use client'

import React from "react";
import Image from "next/image";
import { CustomButton } from "../components";

const Hero = () => {
    const handleScroll = () => {
        alert("closed")
    }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book , or rent a car -- quickly and easily
        </h1>
        <p>
          Steemless your car rental experiences with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containersStyles="bg-primary-blue
              text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay"
        
         />
          
        
      </div>
    </div>
  );
};

export default Hero;
