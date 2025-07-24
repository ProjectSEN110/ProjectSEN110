import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login =({settheUsername})=> {
    const [name, setName]=useState(" ")
    const navigate = useNavigate()

    const handleSubmission = () =>{
        if(name.trim()) {
            settheUsername(name)
            navigate("/start")
        }
        else{
            alert("Please input your name!")
        }
    }
    return(
        <div className="loginform">
            <h1>WELCOME TO MY QUIZ APP</h1>
            <h3>Login</h3>
            <label htmlFor="name">Usernaame: </label>
            <input type="text" placeholder="Input Username"   value={name} onChange={(e)=>setName(e.target.value)}/>
            <br />
            <button onClick={handleSubmission}>Click to Login</button>
        </div>
    )
}
export default Login