import React from 'react'
import { Button, BlogItem, Gap } from '../../components'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'
import { setDataBlog } from '../../config/redux/action'

const Home = () => {
  const [ counter, setCounter ] = React.useState(1);
  const { dataBlog, page } = useSelector((state) => state.reducerHome); // Global State
  const dispatch = useDispatch();

  console.log('page: ', page);


  React.useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [dispatch, counter]);
  
  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);

  };
  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };
  
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
              _id={blog._id}
            />
          )
        })}
        
      </div>
      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">{page.currentPage} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default Home