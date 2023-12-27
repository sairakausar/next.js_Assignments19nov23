
'use client'
import React from 'react'

import Image from 'next/image'
import { CustomButtonProps } from '../types'

const CustomButton = (props: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button" || props.btnType}
      className={`custom-btn  ${props.containersStyles}`}
      
      onClick={props.handleClick}
    >
      <span className={"flex-1"}>{props.title}</span>
    </button>
  );
};

export default CustomButton