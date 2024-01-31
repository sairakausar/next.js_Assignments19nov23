'use client'

import { useSelector, useDispatch } from "react-redux";
// useSelector= 

import { increment, decrement } from "@/store/slices/counterSlice";

export default function CounterApp() {
    const count = useSelector((store) => store.counterSlice.count)
    const forDispatch = useDispatch();
    const Plus = () => forDispatch(increment()) 
    const Minus = () => forDispatch(decrement());
    return (
      <div>
        
        <div>
          <button onClick={Plus}> Add</button>
        </div>
            {count}
            <br/>
            
        <button onClick={Minus}> Cut</button>
      </div>
    );
        
}