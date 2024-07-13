import React, {useState} from'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function Login(){
    const [email, setEmail]=useState()
    const [password, setpassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/login', {email, password})
        .then(result=>{console.log(result)
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter email' name='email' className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <button type= "submit" className="btn btn-success w-100">Login</button>
                    </form>
            </div>
        </div>
    )
}

export default Login;