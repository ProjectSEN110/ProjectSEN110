import React, { use, useState, useEffect} from 'react';
import './Quiz.css'
import { questions } from './questions';

const Quiz = () => {

    let [index, setIndex] = useState(0);
    let [question, setQuestion] = useState(questions[index]);
    let [score, setScore] = useState(0);
    let [result, setResult] = useState(false);
    let [timeLeft, setTimeLeft] = useState(10);

 
    const next= () => {
        setIndex(++index);
        setQuestion(questions[index]);
        setTimeLeft(10);
        if (index === questions.length) {
            setResult(true);
        }
        
    }

    const check_answer = (e,ans) => {
        if (question.ans === ans) {
            setScore(score => score + 1)
        }
        next();
    }

    const restart = () => {
        setResult(false);
        setIndex(0);
        setQuestion(questions[0]);
        setScore(0);
        setTimeLeft(10);
    }

    useEffect(() => {
        if (timeLeft === 0) {
          next();          
        }if (result) {
  setTimeLeft( )
 }
        const timer = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
  }, 1000);
        return () => clearTimeout(timer);

});

  return (<> <h1 className='h1'>Ochai's Quiz Game</h1><br></br><h1 className='timer'>{timeLeft}</h1><br></br><br></br>
    <div className='container'>
 
  
  {result?<>
   
    <h2>Your score {score}/{questions.length}</h2>
     
   <button onClick={restart}>Restart</button>
  </>:<>
 

    <h2>{index+1}. {question.question}</h2>
  <ul>
    <li onClick={(e) => {check_answer(e, 1)}}>{question.option1}</li>
    <li onClick={(e) => {check_answer(e, 2)}}>{question.option2}</li>
    <li onClick={(e) => {check_answer(e, 3)}}>{question.option3}</li>
    <li onClick={(e) => {check_answer(e, 4)}}>{question.option4}</li>
  </ul>
 
  <div className='index'>Question {index+1} out of {questions.length}  </div>

  
  </>}

    </div>
 </> );
}

export default Quiz;
