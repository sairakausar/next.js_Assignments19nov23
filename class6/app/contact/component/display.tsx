import React from 'react'
import { ContextType } from 'react';

export default function Display() {
  return (
    <div>
      <h1>Name: {props.contactData.name}</h1>
      <h1>Email:{props.contactData.name} </h1>
      <h1>Message:{props.contactData.name} </h1>
    </div>
  );    
}
