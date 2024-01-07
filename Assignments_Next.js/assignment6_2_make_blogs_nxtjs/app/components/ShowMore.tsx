'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '../types';
import { CustomButton } from '../components';
import { updateSearchParams } from '@/utils';



const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const Router = useRouter();
  const newLimit = (pageNumber + 1) * 10;

  const handleNavigation = () => {
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    Router.push(newPathname);
  };

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