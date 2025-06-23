import React, { useState } from 'react';
import './App.css'; 

export function SignUp() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        const newUser = { email, password, username };
        
        const users = JSON.parse(localStorage.getItem('users')) || [];
        
        if (users.some(user => user.email === email)) {
            alert("Email already exists. Try logging in.");
            return;
        }

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert("Account created successfully!");
        window.location.href = "/login"; // Redirect to Login.js
    };

  

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h1>Create An Account</h1>
                <form onSubmit={handleSignUp}>
                  
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                            type="text" 
                            placeholder="Enter your username" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                            type="email" 
                            placeholder="Enter your email" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input  
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                            type="password" 
                            placeholder="Enter your password" 
                        />
                    </div>
                    <button type="submit" className="submit-btn">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
