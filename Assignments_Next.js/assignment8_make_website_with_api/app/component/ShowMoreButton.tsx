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
    <div >
      <div className="flex justify-center  ">
        <button
          type="button"
          onClick={openModal}
          className="bg-blue-300 rounded-full hover:bg-emerald-600 hover:text-white w-40 h-8"
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
