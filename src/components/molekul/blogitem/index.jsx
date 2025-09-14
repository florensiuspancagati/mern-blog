import { Button, Gap } from '../../atoms'
import './index.scss'
import { useNavigate } from 'react-router-dom'

const BlogItem = (props) => {
  const navigate = useNavigate();
  const {image, title, name, date, body, _id} = props;

  return (
    <div className='blog-item'>
        <img className='image-thumb' src={image} alt="post" />
        <div className='content-detail'>
          <div className='title-wrapper'>
            <p className='title'>{title}</p>
            <div className='edit-wrapper'>
              <p href="#" className='edit' onClick={() => navigate(`/create-blog/${props._id}`)} >Edit</p> | <p href="#" className='delete' >Delete</p>
            </div>
          </div>
          <p className='author'>{name} - {date}</p>
          <p className='body'>{body}</p>
          <Gap height={20} />
          <Button title="Read More" onClick={() => navigate(`/detail-blog/${props._id}`)} />
        </div>
    </div>
  )
}
 
export default BlogItem