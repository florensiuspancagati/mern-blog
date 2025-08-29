import React from 'react'
import { Button, BlogItem, Gap } from '../../components'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'
import { setDataBlog } from '../../config/redux/action'

const Home = () => {
  const { dataBlog } = useSelector((state) => state.reducerHome); // Global State
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setDataBlog());
  }, [dispatch])

  const navigate = useNavigate()
  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title="create blog" onClick={() => navigate('/create-blog')} />
      </div>

      {/* <p>{name}</p> */}

      <Gap height={20} />
      <div className="content-wrapper">

        {/* Daya Dynamic */}
        {dataBlog.map(blog => {
          return (
            <BlogItem
              key={blog._id}
              image={`http://localhost:3000/${blog.image}`}
              title={blog.title}
              body={blog.body}
              name={blog.author.name}
              date={blog.createdAt}
            />
          )
        })}
        
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