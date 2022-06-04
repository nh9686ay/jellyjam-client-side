import React from 'react'
import '../../assets/css/signUpLoginPage.css';
import { Link } from 'react-router-dom';

function SignUpButton() {
  return (
    <div>
      <Link to={`/signup`}  className="link">
        <button id = "signUpButton">Sign up</button>
        </Link>
    </div>
  )
}

export default SignUpButton