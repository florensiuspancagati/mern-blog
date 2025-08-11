import React from 'react'
import './index.scss'
import { ICReact } from '../../../assets'

const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img className='icon-medsos' src={img} alt="icon" />
        </div>
    )
}
const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <img src={ICReact} alt="" />
            </div>
            <div className='social-wrapper'>
                <Icon img={ICReact} />
                <Icon img={ICReact} />
                <Icon img={ICReact} />
                <Icon img={ICReact} />
                <Icon img={ICReact} />
                <Icon img={ICReact} />
                <Icon img={ICReact} />
            </div>
        </div>
        <div className='copyright'>
            <p>© 2025 Panca Coding. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer