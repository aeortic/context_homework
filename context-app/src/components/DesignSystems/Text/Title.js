import React from 'react';

import './Title.css';

export default function Title({children, className}) {
  let builtClassName = 'Title';
  builtClassName = `${builtClassName}${!!className 
    ? ` ${className}`
    : ''}`;
  return (
    <span className={builtClassName} >{children}</span>
  )
}