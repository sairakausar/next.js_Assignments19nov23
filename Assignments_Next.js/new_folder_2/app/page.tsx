'use client'
import React, { useState, useReducer } from 'react';
import { A_com } from '@/components/A_com';

function reducer(state:any, action:any) {
  // if (action.type == 'increment') {
  //   return {
  //    count : state.count + 1
  //   }
  // }

  // if (action.type == 'decrement') {
  //   return (
  //     {
  //       count: state.count - 1
  //     }
  //   )
  // }
  
  switch (action.type) {
    case 'increment': {
      return {
        count: state.count+1
      }
    }
      
    case 'decrement': {
      return {
        count: state.count - 1
      }
    }
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
      
      <A_com />
    </main>
  );
}
