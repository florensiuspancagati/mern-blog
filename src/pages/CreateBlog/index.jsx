import React from 'react'
import { Input, Button, Upload, Textarea, Gap, Link } from '../../components'
import './index.scss'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const navigate = useNavigate()
  return (
    <div className='blog-post'>
      <Link title="Back" onClick={() => navigate('/')} />
      <p className='title'>Create New Blog Post</p>
      <Input lable="Post Title"/>
      <Upload />
      <Textarea />
      <Gap height={20} />
      <div className='button-action'>
        <Button title="Save" />
      </div>
      <Gap height={20} />
    </div>
  )
}

export default CreateBlog