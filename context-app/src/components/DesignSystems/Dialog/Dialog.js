import React from 'react'
import {Portal} from 'react-portal';

import './Dialog.css'

export function Header({children}) {
  return (
    <div className='dialogHeader'>{children}</div>
  )
}

export function Body({children, className}) {
  return (
    <div className={`dialogBody${className ? ` ${className}` : ''}`}>{children}</div>
  )
}

export function Footer({children}) {
  return (
    <div className='dialogFooter'>{children}</div>
  )
}

export default function Dialog({className, children, onClose, isExpanded}) {

  const modalClickHandler = (onClose) => {
    return (event) => {
      if(window.confirm("Cancel and close this dialog? Data will not be saved."))
      {
        if(!event.isPropagationStopped()) {
          onClose()
        }
      }
    }
  }

  let builtClassName = 'dialogContent';
  builtClassName = `${builtClassName}${!!className
    ? ` ${className}`
    : ''
  }`

  return (
    <Portal>
      <div className='dialogModal' onClick={modalClickHandler(onClose)}>
        <div className={`${builtClassName} ${(isExpanded) ? "dialogExpanded" : ""}`} onClick={(event) => {event.stopPropagation()}}>
          {children}
        </div>
      </div>
    </Portal> 
  )
}
