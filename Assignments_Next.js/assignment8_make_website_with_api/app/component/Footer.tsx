import React from 'react'
import FooterLinks from '@/constants'
import Link from 'next/link'

const Footer = () => {
    return (
      <div
        className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 my-5 border border-blue-700 to-green-400 bg-gradient-to-l
           lg:from-pink-400 lg:to-yellow-300 hover:bg-fuchsia-600 md:from-green-400
           md:to-teal-500 sm:from-amber-300 sm:to-lime-400 xs:from-pink-400
            xs:to-yellow-300 "
      >
        <div className="flex justify-center items-center row-span-3">Logo</div>
        {FooterLinks.map((footLink) => {
          return (
            <>
              <div className="flex justify-center ">
                <Link href={footLink.url}>{footLink.title}</Link>
              </div>
            </>
          );
        })}
      </div>
    );
}

export default Footer