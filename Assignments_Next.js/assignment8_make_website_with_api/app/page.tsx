import { FetchData } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const products = await FetchData();

  return (
    <main>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-9 mx-10">
        {products.map((product:any) => { 
          return (
            <div className="border border-blue-700 p-2">
              <div className=" relative border-4 border-red-800 h-48">
                <Image
                  src={product.image}
                  fill
                  alt="" />
              </div>
              <div className="border-2 border-green-700 h-12 flex justify-around items-center">
                <div>Price = {product.price}</div>
                <div>Category= {product.category }</div>
              </div>

              <div className="relative border-2 border-purple-800 h-8 flex justify-center">
                Title: 
              </div>
              <div className="flex justify-center ">
                <button className="bg-blue-300 rounded-full ">
                  Show More Details
                </button>
              </div>
            </div>
          );
          })}
        

       
      </div>
    </main>
  );
}



