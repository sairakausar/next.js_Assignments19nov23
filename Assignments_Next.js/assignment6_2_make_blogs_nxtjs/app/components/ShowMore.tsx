'use client'
import React from 'react'

import { ShowMoreProps } from '../types';
import { CustomButton } from '../components';




const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  
  

  const handleNavigation = () => {
   const newLimit = (pageNumber + 1) * 10;
  setLimit(newLimit);};

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containersStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore