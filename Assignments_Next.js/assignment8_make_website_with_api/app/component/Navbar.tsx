'use client'

import React from 'react'


const Navbar = () => {

  return (
    <>
      <nav
       
        className="border border-blue-700 to-green-400 bg-gradient-to-l
           lg:from-pink-400 lg:to-yellow-300 hover:bg-fuchsia-600 md:from-green-400
           md:to-teal-500 sm:from-amber-300 sm:to-lime-400 xs:from-pink-400
            xs:to-yellow-300 "
      >
        <div className=" relative flex justify-around items-center h-12 z-10">
          <div className="logo">Logo</div>
          <div className="about">About</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar