 

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function Component() {
  return (
    <Navbar
      rounded
      className=" bg-gradient-to-br from-amber-500 to-lime-700 h-28 flex z-50 absolute w-screen"
    >
      <NavbarBrand
        as={Link}
        href="https://flowbite-react.com"
        className="border-2 border-black"
        //...........
      >
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt=" Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Text to Image Generator
        </span>
      </NavbarBrand>
      <NavbarToggle className="bg-red-500 z-50 absolute right-8" />

      <NavbarCollapse className="flex justify-between w-[60%]  border-2 border-black">
        {/* //.....NavbarCollapse...... */}
        <NavbarCollapse>
          <NavbarLink href="#" active>
            Home
          </NavbarLink>
        </NavbarCollapse>

        <NavbarCollapse>
          {" "}
          <NavbarLink as={Link} href="#">
            About
          </NavbarLink>
        </NavbarCollapse>
        <NavbarCollapse>
          {" "}
          <NavbarLink href="#">Services</NavbarLink>
        </NavbarCollapse>
        <NavbarCollapse>
          <NavbarLink href="#">Pricing</NavbarLink>
        </NavbarCollapse>
        <NavbarCollapse>
          <NavbarLink href="#">Contact</NavbarLink>
        </NavbarCollapse>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Component;
