import React from "react";
import './App.css';
import SignUp from './signup';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
 
const courses = [
  { id: 1, title: "Mathematics", description: "Test your math skills from algebra to calculus." },
  { id: 2, title: "Science", description: "Explore quizzes in physics, chemistry, and biology." },
  { id: 3, title: "History", description: "Check your knowledge of world and national history." },
  { id: 4, title: "Computer", description: "Dive into programming, algorithms, and more." },
  { id: 5, title: "English", description: "Grammar, literature, and writing quizzes." },
  { id: 6, title: "Coding", description: "HTML,CSS AND JS." },
];
   
  
export default function Dashboard() {
    
  return (
    <div className="quizContainer">
        <nav >
        <h1 className="adminnav">Quiz Dashboard</h1>
       
    
        </nav>
    

      <div className="con">
        {courses.map((course) => (
          <div
            key={course.id}
            className="boxes"
          >
            <h2 className="">{course.title}</h2>
            <p className="desc">{course.description}</p>
            <Link to={`/${course.title.toLowerCase()}`}>

              <button className="takequiz">Take Quiz</button>
            </Link>
           
          </div>
        ))}
      </div>
    </div>
  );
}