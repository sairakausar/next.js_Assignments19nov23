import React from 'react'
import Image from 'next/image';
import Logo from '@/public/1 logo.png'

const Navbar = () => {
  return (
    <div className="grid grid-rows-3 bg-gradient-to-r from-green-600 to-red-600 w-full h-36 ">
      <div className="flex justify-around items-center">
        <div className="justify-center items-center">
          <div className="Logo">
            {" "}
            <Image
              src={Logo}
              alt="Hero Image"
              className="w-full h-24 bg-center bg-no-repeat bg-cover relative opacity-65"
            />
          </div>
        </div>
        <div className="grid-rows-3 absolute ">
          <div className="Home">Home</div>
          <div className="AboutUs">About Us</div>
          <div className="ContactUs">Contact Us</div>
        </div>
        <div>
          <div className="signIn">Sign in</div>
          <div className="signOut">Sign up</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar