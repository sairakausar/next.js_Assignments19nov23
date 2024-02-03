'use client'
import React from 'react'

const FormForData = () => {
  return (
    <div>
      <form>
        <div className="flex justify-around w-80">
          <label className="text font-extrabold text-red-600">Title:</label>
          <input
            type="text"
            className="hover:size-full hover:border-orange-500 hover:border-3 w-80 bg-gradient-radial from-green-700 to-red-700 text-white font-semibold"
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
          />
        </div>
      </form>
      <br />
      <button className="border-2 border-red-600 border-e-green-200 text font-extrabold text-white">Submit Button</button>
    </div>
  );
}

export default FormForData