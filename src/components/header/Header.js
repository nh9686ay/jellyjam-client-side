import React from 'react'
import SignUpButton from './SignUpButton'
import LoginButton from './LoginButton';
import '../../assets/css/signUpLoginPage.css';

function Header() {
  return (
      <div id = "headerContainer">
    {/* <div id ="titleContainer">
        <h1 id ="title">Jelly Jam</h1>
    </div> */}
    <div id ="signUpButtonContainer">
        <SignUpButton />
    </div>
    <div id ="loginButtonContainer">
        <LoginButton />
    </div>
    </div>
  )
}

export default Header