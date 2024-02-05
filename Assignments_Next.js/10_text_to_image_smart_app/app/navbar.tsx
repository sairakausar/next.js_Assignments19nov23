 

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
    <Navbar rounded className="bg-purple-500 h-28 flex z-50 absolute w-screen">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt=" Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Text to Image Generator
        </span>
      </NavbarBrand>
      <NavbarToggle className="bg-red-500 z-50 absolute right-8" />

      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Component;
