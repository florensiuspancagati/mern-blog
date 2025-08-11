import React from 'react'
import './index.scss'
import { ICReact } from '../../../assets'

const Upload = () => {
  return (
    <div className="upload">
        <img className='preview' src={ICReact} alt="preview" />
        <input type="file" />
    </div>
  )
}

export default Upload