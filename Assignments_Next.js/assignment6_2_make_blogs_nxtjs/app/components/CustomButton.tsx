
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
      <span className={`flex-1 ${props.textStyles}`}>{props.title}</span>

      {props.rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={props.rightIcon}
            alt="right Icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton