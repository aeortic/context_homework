import React from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io';
import './CloseButton.css'

export default function CloseButton({className, size_14, ...props}) {
  let builtClassName = 'closeButton';
  builtClassName = `${builtClassName}${!!size_14 ? ' closeButton--size_14' : ''}`;
  builtClassName = `${builtClassName}${!!className 
    ? ` ${className}`
    : ''}`;

  return (
    <IoMdCloseCircleOutline
      className={builtClassName}
      {...props}
    />  
  )
}
