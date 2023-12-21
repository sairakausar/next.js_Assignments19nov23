'use client'

import { log } from 'console';
import React, { useState } from 'react'

export default function contactForms() {
    // //  5
    // let hisnameShowFront : string = " "

    //6  
    let [nameShowonBox, setnameShowonBox] = useState("");
    //  setnameShowonBox = ;


          // 1
    const onClickButton = () => {
      console.log("ABC");
    }
    
    // 2
    // const valueChangeThenIKnow = () => {
    //     console.log("XYZ")
    // }
    // 3// ()object value show = event = 
    // 4 down wala     
    const valueChangeThenIKnow = (event: any) => {
        console.log("valueChangeThenIKnow", event.target.value);
      
        // 7  // first this is slow now commnt it
        
        // hisnameShowFront = event.target.value
        setnameShowonBox(event.target.value );
    }



  return (
    <div>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          {/* 5
          Name: {hisnameShowFront} */}
          {/* //   7 */}
          {/* // 8 */}
          Name: {nameShowonBox}
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            //   2
            onChange={valueChangeThenIKnow}
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            // 1
            onClick={onClickButton}
            //        submit button ka liya phaly on click lagana ha for
            //  submit click action uper phala is ka variable define kiya ha
            // onclick button ka
            

          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
    }
    


