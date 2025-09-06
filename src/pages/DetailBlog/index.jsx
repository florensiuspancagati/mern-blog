import React from 'react'
import './index.scss'
import { Link } from '../../components'
import { useNavigate, useParams } from 'react-router-dom'
import Axios from 'axios'

const DetailBlog = () => {
  const [ data, setData ] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {  
    Axios.get(`http://localhost:3000/v1/blog/post/${id}`)
    .then(res => {
      console.log('success: ', res.data);
      setData(res.data.data);
    })
    .catch(err =>{
      console.log('error: ', err);
    });
  }, [id]);

  const navigate = useNavigate()

  if(data.author) { // Cek jika data.author ada
    return (
      <div className='detail-blog-wrapper'>
        <img className='img-cover' src={`http://localhost:3000/${data.image}`} alt="thumb" />
        <p className='blog-title'>{data.title}</p>
        <p className='blog-author'>{data.author.name} - {data.createdAt}</p>
        <p className='blog-body'>{data.body}</p>
        <Link title="Back" onClick={() => navigate('/')} />
      </div>
    )
  }
  return <p>Loading...</p> // Tampilkan loading jika data.author belum ada
}

export default DetailBlog