import React from 'react'
import { Input, Button, Upload, Textarea, Gap } from '../../components'
import './index.scss'

const CreateBlog = () => {
  return (
    <div className='blog-post'>
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