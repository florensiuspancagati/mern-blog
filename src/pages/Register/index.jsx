import React from 'react'
import './index.scss'
import { registerbg } from '../../assets'
import { Button, Input, Gap, Link } from '../../components'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
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
          <Button title="Register" onClick={() => navigate('/')} />
          <Gap height={100} />
          <Link title="Already have an account? Login" onClick={() => navigate('/login')}/>
        </div>
    </div>
  )
}

export default Register