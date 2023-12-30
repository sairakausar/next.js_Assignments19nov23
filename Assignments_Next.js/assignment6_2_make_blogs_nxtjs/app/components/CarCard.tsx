'use client'

import React from 'react'
import { useState } from 'react';
import { CarProps } from '../types';
import { CustomButton } from '.';



interface CarPropsType {
  CallforCarCard: CarProps;
}



const CarCard = (props: any) => {
    const { city_mpg, class, combination_mpg, cylinders, displacement,
        drive, fuel_type, highway_mpg, make, model, transmission, year } = CallforCarCard;

  return <div className="">{props.CallforCarCard}</div>;
};

export default CarCard;