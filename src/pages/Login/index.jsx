import React from 'react'
import { loginbg } from '../../assets'
import { Input, Button, Gap, Link } from '../../components'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='main-page'>
        <div className="left">
          <img src={loginbg} alt="login" className='bg-image' />
        </div>
        <div className="right">
          <p className="title">Login</p>
          <Gap height={18} />
          <Input lable="Email" placeholder="Email"/>
          <Gap height={18} />
          <Input lable="Password" placeholder="Password"/>
          <Gap height={50} />
          <Button title="Login" onClick={() => navigate('/')} />
          <Gap height={100} />
          <Link title="Dont't have an account? Register" onClick={() => navigate('/register')} />
        </div>
    </div>
  )
}

export default Login