import React from 'react'
import './index.scss'
import { registerbg } from '../../assets'
import { Button, Input, Gap, Link } from '../../components'

const Register = () => {
  return (
    <div className='main-page'>
        <div className="left">
          <img src={registerbg} alt="register" className='bg-image' />
        </div>
        <div className="right">
          <p className="title">Register</p>
          <Input lable="Full Name" placeholder="Full Name" />
          <Gap height={18} />
          <Input lable="Email" placeholder="Email"/>
          <Gap height={18} />
          <Input lable="Password" placeholder="Password"/>
          <Gap height={50} />
          <Button title="Register" />
          <Gap height={100} />
          <Link title="Already have an account? Login"/>
        </div>
    </div>
  )
}

export default Register