import React from 'react'
import { ICReact } from '../../../assets'
import './index.scss'

const BlogItem = () => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={ICReact} alt="post" />
        <div className='content-detail'>
            <p className='title'>Title Blog</p>
            <p className='author'>Author - Date Post</p>
            <p className='body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatum nostrum nesciunt quaerat nihil, natus perspiciatis! Quis ratione, eveniet fuga in sint suscipit earum cum ducimus ab iste, delectus ipsum!</p>
        </div>
    </div>
  )
}
 
export default BlogItem