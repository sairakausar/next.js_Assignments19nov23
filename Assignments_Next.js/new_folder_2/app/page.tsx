'use client'
import Image from "next/image";
import React, { useState, useReducer } from 'react';

function reducer(state:any, action:any) {
  if (action.type == 'increment') {
    return { 
     count : state.count + 1
    }
  }

  if (action.type == 'decrement') {
    return (
      {
        count: state.count - 1
      }
    )
  }
  
}


const InitialState = {
  count: 0,
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, InitialState) 
  // const [count, setCount] = useState(0)

  function increment() {
    dispatch(
    // yeoow braket action
      {
        type: 'increment',
    }
    )
  }

  function decrement() {
    dispatch(
      {
        type: 'decrement'
      }
    )
  }

  
  return (
    <main>
      <button onClick={increment}>+</button>
      {state?.count}
      <button onClick={decrement}>-</button>
    </main>
  );
}
