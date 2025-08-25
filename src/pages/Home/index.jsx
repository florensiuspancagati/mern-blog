import React from 'react'
import { Button, BlogItem, Gap } from '../../components'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Home = () => {
  const [dataBlog, setDataBlog] = React.useState([]);

  React.useEffect(() => {
    Axios.get('http://localhost:3000/v1/blog/posts?page=2')
    .then(result => {
      const responseAPI = result.data;
      setDataBlog(responseAPI.data);
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