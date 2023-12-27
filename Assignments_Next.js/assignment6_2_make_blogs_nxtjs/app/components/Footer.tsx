import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { footerLinks } from './constants'
 
const Footer = () => {
  return (
    <footer
      className="flex flex-col text-black-100 
    mt-5 border-t border-gray-100"
    >
      <div
        className="flex max-md:flex-col 
      flex-wrap justify-between gap-5 sm:px-16
      px-6 py-10"
      >
        <div
          className="flex flex-col justify-start
        items-start gap-6"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={118}
            className="object-contain"
          />
          <p className="text-lg text-gray-700">
            {" "}
            Carhub 2024 <br />
            All rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          
          {footerLinks.map((object) => {
            return (
              <div key={object.title} className="footer__link">
                <h3 className="font-bold">{object.title}</h3>
                {object.links.map((inerObject) => {
                  
                  return (
                    <Link
                      href={inerObject.url} className="text-gray-500">
                      
                      {inerObject.title}
                      
                    </Link>
                  );
                })}
              </div>
            );
          }
            
          
          
          )}
        
        </div>
      </div>
    </footer>
  );
}

export default Footer