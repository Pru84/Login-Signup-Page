import React, {useState} from'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 

function Signup(){
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [password, setpassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3000/signup', {name, email, password})
        .then(result=>{console.log(result)
            navigate('/login')
        })
        .catch(err=>console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>SignUp</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name">name</label>
                        <input type="name" placeholder='Enter name' name="name" className='form-control rounded-0' onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter email' name='email' className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <button type= "submit" className="btn btn-success w-100">Register</button>
                    </form>
                    <p>you agree toterms and conditions</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
            </div>
        </div>
    )
}

export default Signup;