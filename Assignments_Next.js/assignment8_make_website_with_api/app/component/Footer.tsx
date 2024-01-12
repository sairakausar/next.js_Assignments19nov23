import React from 'react'
import FooterLinks from '@/constants'
import Link from 'next/link'

const Footer = () => {
    return (
      <div className="grid lg:grid-cols-3  md:grid-cols-3 sm:grid-cols-1 my-5 bg-gradient-to-tr from-emerald-400 to-green-600">
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