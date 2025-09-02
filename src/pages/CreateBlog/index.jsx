import React from 'react'
import { Input, Button, Upload, Textarea, Gap, Link } from '../../components'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const CreateBlog = () => {
  const [ title, setTitle ] = React.useState('');
  const [ body, setBody ] = React.useState('');
  const [ imagePreview, setImagePreview ] = React.useState(null);
  const [ image, setImage ] = React.useState(null);
  const navigate = useNavigate()
  const onSubmit = () => {
    console.log('title: ', title);
    console.log('body: ', body);
    console.log('image: ', image);

    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    data.append('image', image);

    Axios.post('http://localhost:3000/v1/blog/post', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log('res: ', res);
    })
    .catch(err => {
      console.log('err: ', err);
    })
    
  };
  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className='blog-post'>
      <Link title="Back" onClick={() => navigate('/')} />
      <p className='title'>Create New Blog Post</p>
      <Input lable="Post Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
      <Textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <Gap height={20} />
      <div className='button-action'>
        <Button title="Save" onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default CreateBlog