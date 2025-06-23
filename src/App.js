import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SignUp from './signup';
import Login from './login';
import  Dashboard from './dashboard';
import Mathematics from './mathematics';
import Science from'./science';
import History from'./history';
import Computer from "./computer";

import English from "./english";
import Coding from "./coding";

function App() {
  return (
    <BrowserRouter>
    {/* Nav will only be displayed for these routes */}
    <Routes>
      <Route path="/" element={<><Nav /><Hero /></>} />
      <Route path="/signup" element={<><Nav /><SignUp /></>} />
      <Route path="/login" element={<><Nav /><Login /></>} />
      
    </Routes>

    {/* Dashboard Route without Nav */}
    <Routes>
      <Route path="/dashboard" element={< Dashboard/>} />
      <Route path="/mathematics" element={<Mathematics />} />
      <Route path="/history" element={<History />} />
      <Route path="/science" element={<Science />} />
       
      
        <Route path="/Mathematics" element={<Mathematics />} />
        <Route path="/Computer" element={<Computer />} />
        <Route path="/History" element={<History />} />
        <Route path="/English" element={<English />} />
        <Route path="/Coding" element={<Coding />} />
        {/* Add other subject routes here */}
      
   
    
    </Routes>
  </BrowserRouter>
  );
} 



function Nav() {
  return (
    <div className="navbar">
      <div className="logo">QuizMaster</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="user-actions">
        <button ><Link to="/login" style={{color:"white"}}>Login</Link></button>
        <button><Link to="/signup" style={{color:"white"}}>Sign Up</Link></button>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className='bg-img'>
      <div>
        <h1 className='welcome'>Welcome to QuizMaster</h1>
        <p className='first-txt'>The ultimate quiz platform to test your knowledge and compete with friends.</p>
        <button className='cta' style={{ position: 'relative', top: 270 }}>
          <Link to="/quizzes" className="cta">Start Your First Quiz</Link>
        </button>
      </div>
      <img src='banner.jpg' width={400} style={{position:'relative',left:800,top:-25}} alt="Banner" />
    </div>
  );
}

export default App;
