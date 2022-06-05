import React from 'react'
import '../../assets/css/signUpLoginPage.css';
import { Link } from 'react-router-dom';

function LoginButton() {
  return (
    
    <div className='signUp'>
       <Link to={`/login`}  className="link">
        <button className = "glow-on-hover">Log &nbsp;in</button>
        </Link>
    </div>
  )
}

export default LoginButton