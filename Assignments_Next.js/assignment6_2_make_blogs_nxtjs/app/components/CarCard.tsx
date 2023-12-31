'use client'

import React from 'react'
import { useState } from 'react';
import { CarProps } from '../types';
import { CustomButton } from '.';
import { calculateCarRent } from '@/utils';


// Destructuring
 interface CarPropsType {
   CallforCarCard: CarProps;
 }



const CarCard = ({ CallforCarCard }: CarPropsType) => {
  const { city_mpg, year, model, make, fuel_type } = CallforCarCard;
  const CarRent = calculateCarRent(city_mpg , year);

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
        <span className="self-start text-[14px] font-semibold ">
          {CarRent}
        </span>
      </p>
    </div>
  );
};

export default CarCard;