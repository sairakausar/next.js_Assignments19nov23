import React from 'react'
import { FetchData } from "@/utils";
import Image from "next/image";
import ShowMoreButton from './ShowMoreButton';

const Card = async () => {
    const products = await FetchData();
  return (
    <div className="grid lg:bg-emerald-100 lg:grid-cols-4 md:grid-cols-3 md:bg-teal-300 sm:grid-cols-2 sm:bg-slate-300 xs:grid-cols-1 xxs:mx-0 gap-9 mx-10">
      {products.map((product: any) => {
        return (
          <div className="border border-blue-700 to-green-400  p-2">
            <div className=" relative border-4 border-red-800 h-48">
              <Image src={product.image} fill alt="image" />
            </div>
            <div className="border-2 border-green-700 h-12 flex justify-around items-center">
              <div>Price = {product.price}</div>
              <div>Category= {product.category}</div>
            </div>

            <div className="relative border-2 border-purple-800 h-8 flex justify-center">
              Title:
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