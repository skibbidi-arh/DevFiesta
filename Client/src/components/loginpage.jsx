import React, { useContext, useState } from 'react'
import '../layouts/loginpage.css'
import { useUser } from '../hooks/AutoAuth'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const loginpage =() => {
    const navigateto = useNavigate();
    const {oldUser,newUser,loading} = useUser();
    const [formData,setformData] = useState({
        email:"",
        password:""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({
            ...prev,
            [name]: value
  }));
};
    const enableLogin =async ()=>{
        try{
            const loginresponse =await axios.post('/backend/login',formData)
            console.log(loginresponse.data);
            newUser(loginresponse.data)
            navigateto('/')
        } 
        catch(error){   
             const message = error.response.data?.error ||      "Login failed";
                alert('Invalid Credentials')
                navigateto('/loginpage')
            
        }
    }
  return (
     <div className="page-container">
        <nav className="navbar">
                <div className="brand-logo">
                    <div className="brand-name">DevFiesta</div>
                </div>
          
        </nav>

        <main className="main-content">
            <div className="login-card">
                <h2 className="card-title">Log In</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input onChange={handleChange} required type="email" id="email" name="email" placeholder="Input Email Address" value={formData.email}
                               className="form-input"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password</label>
                    <input type="password"onChange={handleChange} id="password" name="password" placeholder="Type here..."
                          value={formData.password}     className="form-input"/>
                    </div>
                    <div className="social-login-buttons">
                         <button onClick={()=>{enableLogin()}} type="button" className="social-button google-button">
                            Log in 
                        </button>
                        <button type="button" className="social-button google-button">
                            Log in with Google
                        </button>
                        <button type="button" className="social-button github-button">
                            Log in with Github
                        </button>
                    </div>
                    <div className="forgot-password-container">
                        <a href="#" className="forgot-password-link">Forgot Password</a>
                    </div>
                </form>
            </div>
        </main>
    </div>
  )
}

export default loginpage