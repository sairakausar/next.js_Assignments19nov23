"use client";

import React from "react";
import { TfiMenu, TfiClose } from "react-icons/tfi";
import Image from "next/image";
import LogoImage from "@/public/logo1.png";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = ()=>{setNav(!nav)}
  return (
    <>
      <nav
        className="w-screen fixed  flex justify-between items-center  h-[80px] z-10 drop-shadow-lg border border-blue-700 to-green-400 bg-gradient-to-l
           lg:from-pink-400 lg:to-yellow-300 hover:bg-fuchsia-600 md:from-green-400
           md:to-teal-500 sm:from-amber-300 sm:to-lime-400 xs:from-pink-400
            xs:to-yellow-300 "
      >
        <div className=" flex justify-start pl-5">
          <Image src={LogoImage} width={50} height={50} alt="LogoImage" />
        </div>

        <ul className="flex flex-row justify-between px-5">
          <li className="pr-5">Home</li>
          <li className="pr-5">About</li>
          <li className="pr-5">Contact us</li>
          <li className="pr-5">Platforms</li>
          <li className="pr-5">Pricing</li>
        </ul>
        <div className="flex flex-row justify-end items-end pr-5">
          <div className=" hidden md:flex justify-end hover:text-4xl  hover:border-slate-950 border-blue-900  rounded-full text-blue-900 hover:bg-black hover:text-white p-5">
            <button>Sign In</button>
          </div>
          <div className=" hidden md:flex justify-end hover:text-4xl hover:text-purple-700 hover:border-slate-950 bg-black border-blue-900 rounded-full text-white p-5">
            <button>Sign Up</button>
          </div>
        </div>

        <div className="md:hidden pr-10" onClick={handleClick}>
          {!nav ? <TfiMenu className="w-5" /> : <TfiClose />}
        </div>
      </nav>

    </>
  );
};

export default Navbar;
