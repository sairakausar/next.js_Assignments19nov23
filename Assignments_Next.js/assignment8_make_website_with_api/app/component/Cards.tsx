import React from 'react'
import { FetchData } from "@/utils";
import Image from "next/image";
import ShowMoreButton from './ShowMoreButton';

const Card = async () => {
    const products = await FetchData();
  return (
    <div className="grid lg:bg-emerald-100 lg:grid-cols-4 md:grid-cols-3 p-7
     md:bg-orange-300 sm:grid-cols-2 sm:bg-slate-300 xs:grid-cols-1 xxs:mx-0 gap-9 mx-10 ">
      {products.map((product: any) => {
        return (
          <div
            key={product.id}
            className="border border-blue-700 to-green-400 bg-gradient-to-l
           lg:from-pink-400 lg:to-yellow-300 hover:bg-fuchsia-600 md:from-green-400
           md:to-teal-500 sm:from-amber-300 sm:to-lime-400 xs:from-pink-400
            xs:to-yellow-300 p-2 rounded-tl-3xl rounded-br-3xl"
          >
            <div className=" relative border-4 lg:border-green-700 border-red-800 h-48">
              <Image src={product.image} fill alt="image" />
            </div>
            <div className="border-2 border-green-700 h-12 flex justify-around items-center">
              <div>Category= {product.category}</div>
            </div>
            <div className="relative border-2 border-purple-800 h-12 overflow-hidden flex justify-center ">
              Title: {product.title}
            </div>

            <div className="relative border-2 border-purple-800 h-8 font-bold flex justify-center items-center">
              Price = ${product.price}
            </div>

            <div>
              {" "}
              <ShowMoreButton product={product} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card