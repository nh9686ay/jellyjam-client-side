import React from 'react'
import '../../assets/css/signUpLoginPage.css';
import { Link } from 'react-router-dom';

function SignUpButton() {
  return (
    <div>
      <Link to={`/signup`}  className="link">
        <button className = "glow-on-hover" >Sign up</button>
        </Link>
    </div>
  )
}

export default SignUpButton