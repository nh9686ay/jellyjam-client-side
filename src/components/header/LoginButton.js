import React from 'react'
import '../../assets/css/signUpLoginPage.css';
import { Link } from 'react-router-dom';

function LoginButton() {
  return (
    
    <div>
     
       <Link to={`/login`}  className="link">
        <button id="loginButton">Login</button>
        </Link>
    </div>
  )
}

export default LoginButton