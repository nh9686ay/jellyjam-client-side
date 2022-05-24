import React from 'react'
import SignUpButton from './SignUpButton'
import '../../assets/css/signUpLoginPage.css';

function Header() {
  return (
      <div id = "headerContainer">
    <div>
        <h1>Jelly Jam</h1>
    </div>
    <div id ="signUpButtonContainer">
        <SignUpButton />
    </div>
    </div>
  )
}

export default Header