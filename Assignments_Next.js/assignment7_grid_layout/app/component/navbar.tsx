import React from 'react'
import Image from 'next/image';
import Logo from '@/public/logo.png'

const Navbar = () => {
  return (
    <div className="flex justify-around bg-gradient-to-r from-red-400 to-lime-600">
      <div className="relative flex justify-center items-center bg-gradient-radial size-48 rounded-full">
        <Image src={Logo} fill alt="logo" />
      </div>
      <div className="flex justify-center items-center bg-gradient-radial size-48 rounded-full">
        <button>Home</button>
      </div>

      <div className="flex justify-center items-center bg-gradient-radial size-48 rounded-full">
        <button>About us</button>
      </div>

      <div className="flex justify-center items-center bg-gradient-radial size-48 rounded-full">
        <button>Contact Us</button>
      </div>
    </div>
  );
}

export default Navbar