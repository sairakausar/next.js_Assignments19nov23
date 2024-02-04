'use client'
import React from 'react'
import { createNew } from "@/store/slices/serviceSlice";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const FormForData = () => {
  const [title, setTitle] = useState("")
  const [description, setDiscription] = useState("")

  const forDispatch = useDispatch();
  const ForSubmitButtonOnClick = () => {
    forDispatch(
      createNew({
        id: 1,
        title: title,
        discription: description,
      })
    );}
  return (
    <div>
      <form>
        <div className="flex justify-around w-80">
          <label className="text font-extrabold text-red-600">Title:</label>
          <input
            type="text"
            className="hover:size-full hover:border-orange-500 hover:border-3 w-80 bg-gradient-radial from-green-700 to-red-700 text-white font-semibold"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <br />
        <div className="flex justify-around w-80">
          <label className="text font-extrabold text-red-600">
            Discription:
          </label>
          <input
            type="text"
            className="hover:size-full hover:border-orange-500 hover:border-3 w-80 bg-gradient-radial from-green-700 to-red-700 text-white font-semibold"
          onChange={(event)=>setDiscription(event.target.value)}
          />
        </div>
      </form>
      <br />
      <button
        onClick={ForSubmitButtonOnClick}
        className="border-2 border-red-600 border-e-green-200 text font-extrabold text-white"
      >
        Submit Button
      </button>
    </div>
  );
}

export default FormForData