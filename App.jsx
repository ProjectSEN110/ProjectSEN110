// import { useState } from 'react'
// import './App.css'
import React, { useState } from "react";
import Quiz from "./components/Quiz/Quiz";
import Login from "./components/Login";
import Start from "./components/Start";
import { Router, Routes } from "react-router-dom";


function App() {
  const [theusername,settheUsername] = useState(" ")
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login settheUsername={settheUsername}/>}/>
        <Route path="/start" element={<Start theusername={theusername}/>}/>
        <Route path="/quiz" element={<Quiz theusername={theusername}/>}/>
      </Routes>
    </Router>
    
  )
};
export default App;

