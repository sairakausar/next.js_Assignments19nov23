'use client'

import React from 'react'
import { useState } from 'react';
import { CarProps } from '../types';
import { CustomButton, CarDetails } from ".";
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import Image from 'next/image';


// Destructuring
 interface CarPropsType {
   CallforCarCard: CarProps;
 }



const CarCard = ({ CallforCarCard }: CarPropsType) => {
  const { city_mpg, year, model, make, drive, transmission } = CallforCarCard;

    const [isOpen ,setIsOpen]     = useState(false)

  const CarRent = calculateCarRent(city_mpg, year);
  

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2>
          {year} {make}
          {model}
          {city_mpg}
          {/* {CallforCarCard.city_mpg}
          {CallforCarCard.class} */}
          {/* //This is 2nd method of Destructure= data came out from props */}
        </h2>
      </div>
      <p className="flex *:mt-6 text-[32px] font font-extrabold ">
        <span className="self-start text-[14px] font-semibold ">$</span>
        {CarRent}
        <span className="self-end text-[14px] font-semibold ">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={"/hero.png"}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containersStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        fromSimpleCardToDetailCard={CallforCarCard}
        closeDetailsPage={() => setIsOpen(false)}
        isDetailPageOpen={isOpen}
      />
    </div>
  );
};

export default CarCard;