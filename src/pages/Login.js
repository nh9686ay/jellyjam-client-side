import axios from 'axios'
import React, { useState, useEffect } from 'react'


function Login({ loggedInUser, setLoggedInUser }) {

    const loginFormStructure = {
        email: '',
        password: '',
    }

    const [loginFormData, setLoginFormData] = useState(loginFormStructure)
    const [loginData, setLoginData] = useState([])

    const handleLoginChange = (e) => {
        setLoginFormData({...loginFormData, [e.target.id]: e.target.value })
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault()
        const dataCopy = [...loginData]
        dataCopy.push(loginFormData)
        await setLoginData(dataCopy)
        console.log(loginFormData)
    }
    
    useEffect(() => {
        if(loginData.length) {
            console.log(loginData)

            axios.post('/user/login', {  
                email: loginData[0].email,
                password: loginData[0].password
            })
            .then(res => {
                console.log(res)
                setLoggedInUser(res.data[0])
            })
            .finally(() => console.log(loggedInUser))
            .catch(console.error)
        }
    }, [loginData]);



  return (
    <div>
        <h1>Login</h1>

        <form onSubmit={handleLoginSubmit} onChange={handleLoginChange}>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" defaultValue={loginFormData.email} ></input>
                
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" defaultValue={loginFormData.password} ></input>

                <button type="submit">Login</button>
        </form>

    </div>
  )
}

export default Login