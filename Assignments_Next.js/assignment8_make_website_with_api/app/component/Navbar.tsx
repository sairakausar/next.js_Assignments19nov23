'use client'

import React from 'react'


const Navbar = () => {

  return (
    <>
      <nav className="bg-green-500">
        <div className=" relative flex justify-around items-center h-12 z-10">
          <div className="logo">Logo</div>
          <div className="about">About</div>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar