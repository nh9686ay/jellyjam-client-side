import React, { useState } from 'react'


function Login() {

    const loginFormStructure = {
        email: '',
        password: '',
    }

    const [loginFormData, setLoginFormData] = useState(loginFormStructure)
    const [loginData, setLoginData] = useState([])

    const handleLoginChange = (e) => {
        setLoginFormData({...loginFormData, [e.target.id]: e.target.value })
        console.log(loginFormData)
    }
    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const dataCopy = [...loginData]
        dataCopy.push(loginFormData)
        await setLoginData(dataCopy)
        console.log(loginFormData)
    }

    if(loginData.length) {
        console.log(loginData)
    }



  return (
    <div>
        <h1>Login</h1>

        <form onSubmit={handleLoginSubmit} onChange={handleLoginChange}>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" defaultValue={loginFormData.email} ></input>
                
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" defaultValue={loginFormData.password} ></input>

                <button type="submit">Sign Up</button>
        </form>

    </div>
  )
}

export default Login