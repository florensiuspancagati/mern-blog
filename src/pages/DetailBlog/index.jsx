import React, { useEffect } from 'react'
import { ICReact, loginbg } from '../../assets'
import './index.scss'
import { Link } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'

const DetailBlog = () => {
  

  useEffect(() => {
    const params = useParams();
    const id = params.id;
  
    Axios.get(`http://localhost:3000/v1/blog/post/${id}`)
    .then(res => {
      console.log('success: ', res.data);
    })
    .catch(err =>{
      console.log('error: ', err);
    });
    
  }, [id]);

  const navigate = useNavigate()
  return (
    <div className='detail-blog-wrapper'>
      <img className='img-cover' src={loginbg} alt="thumb" />
      <p className='blog-title'>Title Blog</p>
      <p className='blog-author'>Author - Date Post</p>
      <p className='blog-body'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptatibus cum expedita, voluptates repellendus sit dolor minima sint eum beatae nam consequuntur fugit error animi inventore adipisci accusamus voluptatum doloremque?</p>
      <Link title="Back" onClick={() => navigate('/')} />
    </div>
  )
}

export default DetailBlog