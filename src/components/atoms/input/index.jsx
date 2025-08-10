import React from 'react'
import './index.scss'

const Input = ({lable, ...rest}) => {
  return (
    <div className='input-wrapper'>
        <p className='label'>{lable}</p>
        <input className='input' {...rest} />
    </div>
  )
}

export default Input