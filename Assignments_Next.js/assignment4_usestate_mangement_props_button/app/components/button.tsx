import React from 'react'


export default function MyButton(props:any) {
  return (
    <div>
      <button style={props.MyButtonStyle} className={props.MyclassButton}>
         {props.titleButton}
      </button>
    </div>
  );
}