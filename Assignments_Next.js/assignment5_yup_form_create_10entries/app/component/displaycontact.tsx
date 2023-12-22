import React from 'react'

export default function Displaycontact(props: any) {
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-3xl font-bold text-rose-600">
        {" "}
        Display Contact Child
        <br />
        name: {props.objectforChild.name}
        <br />
              email: {props.objectforChild.email}
              <br />
              message: {props.objectforChild.message}
      </h1>
    </div>
  );
}
