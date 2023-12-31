'use client'

import React from 'react'
import { useState } from 'react';
import { CarProps } from '../types';
import { CustomButton } from '.';


// Destructuring
 interface CarPropsType {
   CallforCarCard: CarProps;
 }



const CarCard = ({ CallforCarCard }: CarPropsType) => {
  const { city_mpg, year, model, make, fuel_type } = CallforCarCard;

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
    </div>
  );
};

export default CarCard;