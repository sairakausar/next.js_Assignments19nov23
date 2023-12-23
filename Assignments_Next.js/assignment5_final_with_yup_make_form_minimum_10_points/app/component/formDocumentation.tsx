'use client'

import React from 'react'
import {useState} from 'react'

export default function FormDocumentation() {
       
  const [oneUseSateuseForall, setoneUseSateuseForall] =
    useState({
    firstname:     "",
    lastname:      "",
    email:         "",
    phone:         "",
    CNIC:          "",
    gender:        "",
    age:           "",
    city:          "",
    country:       "",
    message:       "",
     
  });
  const allContactInfoHandler = (event: any) => {
    let iMakeUseStateMergeWithNewEntries = {
      ...oneUseSateuseForall,
      [event.target.name]:[event.target.value],
    };
 setoneUseSateuseForall(iMakeUseStateMergeWithNewEntries);   
  }
       


  return (
    <div>
      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="firstname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name
          </label>
          <input
            onChange={allContactInfoHandler}
            type="text"
            id="firstname"
            name="firstname"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastname"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name
          </label>
          <input
            onChange={allContactInfoHandler}
            type="text"
            id="lastname"
            name="lastname"
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
            htmlFor="number"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Phone
          </label>
          <input
            onChange={allContactInfoHandler}
            type="number"
            id="number"
            name="number"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            CNIC
          </label>
          <input
            onChange={allContactInfoHandler}
            type="number"
            id="number"
            name="number"
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Gender
          </label>
          <input
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
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Age
          </label>
          <input
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
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            City
          </label>
          <input
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
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Country
          </label>
          <input
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
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Message
          </label>
          <textarea
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
