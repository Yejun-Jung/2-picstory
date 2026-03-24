import React from 'react'
import './Button.scss'

const Button = ({
  text,
  className,
  icons,
  onClick}) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {text}
      {icons && <img src='/images/arrow.svg'/>}
    </button>
  )
}

export default Button