import React from 'react'
import { ICReact, loginbg } from '../../assets'
import './index.scss'

const DetailBlog = () => {
  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={loginbg} alt="thumb" />
        <p className='blog-title'>Title Blog</p>
        <p className='blog-author'>Author - Date Post</p>
        <p className='blog-body'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptatibus cum expedita, voluptates repellendus sit dolor minima sint eum beatae nam consequuntur fugit error animi inventore adipisci accusamus voluptatum doloremque?</p>
    </div>
  )
}

export default DetailBlog