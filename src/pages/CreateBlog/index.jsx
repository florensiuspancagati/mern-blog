import React from 'react'
import { Input, Button, Upload, Textarea, Gap, Link } from '../../components'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postToAPI, setForm, setImagePreview } from '../../config/redux/action'

const CreateBlog = () => {
  const { form } = useSelector(state => state.reducerCreateBlog);
  const { title, body } = form;
  const dispatch = useDispatch();
  // const [ title, setTitle ] = React.useState('');
  // const [ body, setBody ] = React.useState('');
  // untuk image dan imagePreview, bisa pake redux, tp ada eror di redux jd pake useState biasa (local state)
  const [ image, setImage ] = React.useState(null);
  const [ imagePreview, setImagePreview ] = React.useState(null);

  const navigate = useNavigate()

  const onSubmit = () => {
    console.log('title: ', title);
    console.log('body: ', body);
    console.log('image: ', image);

    postToAPI(form, image);
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    // dispatch(setForm('image', file));
    // pakai ini karna ada eror di redux
    // dispatch(setImagePreview(URL.createObjectURL(file)));
    // setImagePreview(file);
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return (
    <div className='blog-post'>
      <Link title="Back" onClick={() => navigate('/')} />
      <p className='title'>Create New Blog Post</p>
      <Input lable="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
      <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
      <Textarea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
      <Gap height={20} />
      <div className='button-action'>
        <Button title="Save" onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default CreateBlog