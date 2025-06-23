import React, { useState } from 'react';
import './App.css'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pfp, setPfp] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
    
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);
    
        if (user) {
            alert("Login successful!");
            
            // Save the logged-in user's email to localStorage
            localStorage.setItem('loggedInUserEmail', email);
    
            window.location.href = "/dashboard";
        } else {
            alert("Invalid email or password.");
        }
    };
    

    return (
        <div className="signup-card" style={{ marginTop: '20px' }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" 
                        placeholder="Enter your email" 
                        required 
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" 
                        placeholder="Enter your password" 
                        required 
                    />
                </div>
                <button type="submit" className="submit-btn">Login</button>
            </form>
        </div>
    );
}

export default Login;
