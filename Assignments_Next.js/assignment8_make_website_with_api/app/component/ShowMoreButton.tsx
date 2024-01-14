"use client";
import React from "react";
import ShowMoreDetails from "./ShowMoreDetails"; 
import { useState } from "react";

const ShowMoreButton = (props:any) => {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
    }
  return (
    <div>
      <div className="flex justify-center  ">
        <button
          type="button"
          onClick={openModal}
          className="bg-blue-300 rounded-full border-b-4 border-red-600 
           lg:hover:bg-emerald-600 md:hover:bg-lime-400 md:hover:text-red-600
            lg:hover:text-white sm:hover:text-orange-600 w-40 h-8 "
         
        >
          Show More Details
        </button>
      </div>

      <ShowMoreDetails
        closeModal={closeModal}
        isOpen={isOpen}
        product={props.product}
      />
    </div>
  );
};

export default ShowMoreButton;
