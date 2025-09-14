import React from 'react'
import { Input, Button, Upload, Textarea, Gap, Link } from '../../components'
import './index.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { postToAPI, setForm, setImagePreview, updateToAPI } from '../../config/redux/action'
import Axios from 'axios'

const CreateBlog = () => {
  const { form } = useSelector(state => state.reducerCreateBlog);
  const { title, body } = form;
  const [ isUpdate, setIsUpdate ] = React.useState(false);
  const dispatch = useDispatch();
  // const [ title, setTitle ] = React.useState('');
  // const [ body, setBody ] = React.useState('');
  // untuk image dan imagePreview, bisa pake redux, tp ada eror di redux jd pake useState biasa (local state)
  const [ image, setImage ] = React.useState(null);
  const [ imagePreview, setImagePreview ] = React.useState(null);
  const navigate = useNavigate()

  const { id } = useParams();
  React.useEffect(() => {
    console.log('params: ', id);
    if(id) {
      setIsUpdate('Update');
      Axios.get(`http://localhost:3000/v1/blog/post/${id}`)
      .then(res => {
        console.log('success: ', res.data);

        dispatch(setForm('title', res.data.data.title));
        dispatch(setForm('body', res.data.data.body));
        dispatch(setImagePreview(`http://localhost:3000/${res.data.data.image}`));
      })
      .catch(err => {
        console.log('error: ', err);
      });
    }
  }, [id]);

  const onSubmit = () => {
    console.log('title: ', title);
    console.log('body: ', body);
    console.log('image: ', image);

    if(isUpdate) {
      console.log('update blog');
      updateToAPI(form, image, id);
    } else {
      console.log('create new blog');
      postToAPI(form, image);
    }
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
      <p className='title'>{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
      <Input lable="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
      <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
      <Textarea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
      <Gap height={20} />
      <div className='button-action'>
        <Button title={isUpdate ? 'Update' : 'Save'} onClick={onSubmit} />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default CreateBlog