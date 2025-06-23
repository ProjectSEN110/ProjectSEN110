
import './App.css';
import React, { useState } from "react";






const questions = [
  {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    question: "Solve: 9 x 6",
    options: ["42", "54", "56", "58"],
    answer: "54"
  },
  {
    question: "What is 100 divided by 4?",
    options: ["20", "25", "30", "24"],
    answer: "25"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  }, {
    question: "What is 5 + 7?",
    options: ["10", "12", "11", "13"],
    answer: "12"
  },
];


 function Mathematics() {
  
  const [started, setStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setscore] = useState(0);
  const [Finished, setFinished] = useState(false);
  const [selected, setSelected] = useState([]);

  const [randomThree, setRandomThree] = useState([]);

  function Startquiz() {
    const selectedRandom = [...questions]
      .sort(() => 0.5 - Math.random())
      .slice(0, questionCount);
    setRandomThree(selectedRandom);
    setStarted(true);
  }
  let newscore = 0;
  function handleresults() {
  
  
    randomThree.forEach((item, index) => {
      if (selected[index] === item.answer) {
        newscore++;
      }
    });
  
    setscore(newscore);
    setFinished(true)
  }

 if (started===false) {
    return(
   <>
   <input type='number'  value={questionCount} onChange={(e)=>setQuestionCount(Number(e.target.value))} placeholder='NUMBER OF QUESTIONS'/>
   <button onClick={Startquiz}>Start Quiz</button>
   </>

    )
    
   
 } 

else if (Finished==true) {
  return(  <h1>Your score is {score} / {randomThree.length};</h1>)

 }
else{
    return(
       <>
  {randomThree.map((item,i) =>
  <div>
         <p> QUESTION {i+1}{item.question}</p>
   {item.options.map((opt,index)=>
    <div>
        <label key={index}>{item.options [index]}</label>
        <input
                type="radio"
                name={`question-${i}`}
                value={opt}
                
                onChange={() => {
                  const updated = [...selected];
                  updated[i] = opt;
                  setSelected(updated);
                }}
              />
    </div>

)}
     
  </div>

     )}
     <button onClick={handleresults}>Finish Quiz</button>
       </>
    )

}
 
}


export default Mathematics;