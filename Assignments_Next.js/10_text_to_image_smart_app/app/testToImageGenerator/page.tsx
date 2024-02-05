'use client'
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Hero from "../hero";

const PageTextToImageGenerator = () => {

   
    const [text, setText] = useState("")
    const [image , setImage] = useState()

const query   = async (data: any) =>{
  const response = await fetch(
    "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
    {
      headers: {
        Authorization: "Bearer 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",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
    const result = await response.blob();
    const imageURL = URL.createObjectURL(result);
  return imageURL;
}
// query({ inputs: "Astronaut riding a horse" }).then((response) => {
//   // Use image
// });

    const onSubmitText = async () => {
        const image = await query({ inputs: text })
        return (
            setImage(image)
        )
    }
    
    
    return (
        <>
            <Hero/>
            
        <div>
          <br />
          <div className="grid grid-cols-1 text-4xl">Next GenAL Image</div>
          <br />
          <input
            className="border border-black bg-lime-200"
            type="text"
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <button
            onClick={onSubmitText}
            type="button"
            className="border border-r-fuchsia-900 bg-slate-300"
          >
            {" "}
            Submit{" "}
          </button>
          <br />
          <div>
            <Image src={image} alt="Image error" width={600} height={600} />
          </div>
        </div>
      </>
    );
}

export default PageTextToImageGenerator;