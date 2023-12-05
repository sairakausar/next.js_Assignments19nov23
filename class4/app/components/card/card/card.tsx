import React from "react";
import Paragrapg from "../paragrapg";


export default function Card({title , hen}:any) {
  return (
    <section>
          <div className="grid lg:grid-cols-4  md:grid-cols-3 sm: grid-cols-1 gap-4   m-4 ">
              

        <div className="card w-full bg-base-100 shadow-xl m-5">
          <figure className="px-10 pt-10">
            <img
              src="https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
           <Paragrapg also = "also the red"  kite = "Flying in the sky"/>
            
            <div className="card-actions">
              <button className="btn btn-error ">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl m-5">
          <figure className="px-10 pt-10">
            <img
              src="https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose? { hen}</p>
            <div className="card-actions">
              <button className="btn btn-error ">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl m-5">
          <figure className="px-10 pt-10">
            <img
              src="https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-error ">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl m-5">
          <figure className="px-10 pt-10">
            <img
              src="https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-error ">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
