import React from "react";

import { createService, upDateService } from "@/store/slices/serviceSlice";
import {  useDispatch } from "react-redux"; // this send thing in fron with action to store

import { useState, useEffect } from "react";

const UpdateForm = () => {
    const [title, setTitle] = useState("")
    const [discription, setDiscription] = useState("")
    
    
    const forDispatch = useDispatch();
    
    // custom function
    //1 submit
    const create = () => {
        forDispatch(
            createService({
                id: 2,
                title: title,
                description: discription,
            })
        )
        setTitle("");
        setDiscription("");
    }

    
    //2 new title
    const newTitle = (event: any) => setTitle(event.target.value);
    //3 new Description
    const NewDescription = (event: any) => setDiscription(event.target.value);

  return (
    <div>
      <form>
        <label>Title</label>
        <input
          type="text"
          className="border-2 border-black"
          value={title}
          onChange={newTitle}
        ></input>
        <label>Discription</label>
        <input
          type="text"
          className="border-2 border-black"
          value={discription}
          onChange={NewDescription}
        ></input>
      </form>
      <button onClick={create}>create</button>
    </div>
  );
};

export default UpdateForm;
