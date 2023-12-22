'use client'

import { useState } from 'react'; 
import Displaycontact from './displaycontact';

export default function FormDocumentation() {

  const [allTheContactImake1UseState, setallTheContactImake1UseState] =
    useState({
      name: "",
      email: "",
      message: "",
      // we never use = sign in the object. In the object always use:
      // 1) make the use state hook after makin the displaycontact.tsx
      // allTheContactImake1UseState this is also object
    });

  // 2) function make and this function put on all the value of name ,
  // email, message and 2nd of his purpose is use Sate function use in it and 
  // it set the the of 1st variable of useState . 3rd work in it UseSate 
  //First variable of useSate using Spred opertor
  // this open value and this opened value merge with the new value.
  const allContactInfoHandler = (event: any ) => {  // event is complsory inspect
    let allTheContactImake1UseStateMergerwithNewEntries = {
      // this is obect allTheContactImake1UseStateMergerwithNewEntries
      // 3) make object
      ...allTheContactImake1UseState, // this value is open with spred
      [event.target.name]: [event.target.value],
    };
      //3)

      // :  []more value
      // value assign with:
      // it make run tine variable himsely by react for this purpose we put
      // [] it make dynamic variable by himselfly and also chenged by himselfly
      // 4)  [event.target.name] for changinging name value i time then chage
      // the name to email and other with Dynamicly
setallTheContactImake1UseState(allTheContactImake1UseStateMergerwithNewEntries);
    //5) now his copy can come out with the st() allTheContactImake1UseStateMergerwithNewEntries
    // 
   }

    
  return (
    <div>
      {/* // 9) give to value of child for display front last this work but no 
      display on front*/}
      <Displaycontact objectforChild={allTheContactImake1UseState} />

      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            //6) //2) wala which change value set the value
            onChange={allContactInfoHandler}
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
            //7) same give this funtion
            onChange={allContactInfoHandler}
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
            //8) text are = input
            onChange={allContactInfoHandler}
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
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
