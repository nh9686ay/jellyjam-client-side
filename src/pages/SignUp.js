import React, { useState }from 'react'
import axios from 'axios';
import SideNav from '../components/SideNav';
import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate()

    const formStructure = {
        email: '',
        userName: '',
        password: '',
    }

    const [signUpForm, setSignUpForm] = useState(formStructure)
    const [signUpData, setSignUpData] = useState([])

    const handleSignUpChange = (e) => {
        setSignUpForm({ ...signUpForm, [e.target.id]: e.target.value })
    }
    const handleSignUpSubmit = async (e) => {
        e.preventDefault()
        const dataCopy = [...signUpData]
        dataCopy.push(signUpForm)
        await setSignUpData(dataCopy)
        console.log(signUpForm)
        //then send signUpData to api server
    }

    if(signUpData.length) {
        
            console.log(signUpData)
            const url = process.env.REACT_APP_IS_DEPLOYED === 'true'
                ? "https://jellyjam-server.herokuapp.com/user/signup"
                : "/user/signup"
            axios.post(url, { 
                email: signUpData[0].email,
                userName: signUpData[0].userName,
                password: signUpData[0].password
            })
            .then(res => {
                console.log(res)
                navigate('/login')
            })
            .catch(console.error)
    }

    return (
        <div>
            <h1>SignUp</h1>

            <form onSubmit={handleSignUpSubmit} onChange={handleSignUpChange}>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" defaultValue={signUpForm.email} ></input>
                
                <label htmlFor="userName">User Name: </label>
                <input type="text" id="userName" defaultValue={signUpForm.userName} ></input>
                
                <label htmlFor="password">Password: </label>
                <input type="text" id="password" defaultValue={signUpForm.password} ></input>
                <button type="submit">Sign Up</button>
            </form>
            <div className='navWrap'>
                <SideNav />
            </div>

        </div>
    )
}

export default SignUp