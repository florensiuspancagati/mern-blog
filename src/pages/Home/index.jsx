import React, { useEffect } from 'react'
import { Button, BlogItem, Gap } from '../../components'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Home = () => {

  useEffect(() => {
    Axios.get('http://localhost:3000/v1/blog/posts')
    .then(result => {
      console.log('result: ', result.data);
    })
    .catch( err => {
      console.log('err: ', err);
    });
  }, [])

  const navigate = useNavigate()
  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title="create blog" onClick={() => navigate('/create-blog')} />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home