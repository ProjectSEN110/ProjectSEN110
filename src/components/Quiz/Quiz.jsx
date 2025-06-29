import React, { useRef, useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
    let[index,setIndex]=useState(0);
    let[question,setQuestion]=useState(data[index]);
    let[lock,SetLock]=useState(false);
    let[score,SetScore]=useState(0)
    let[result,SetResult]=useState(false);


    let option1 =useRef(null);
    let option2 =useRef(null);
    let option3 =useRef(null);
    let option4 =useRef(null);

    let option_array=[option1,option2,option3,option4]


    const checkans=(e,ans) => {
        if (lock===false) {
            if(question.ans===ans){
                e.target.classList.add("correct");
                SetLock(true);
                SetScore(prev=>prev+1);
            }
            else{
                e.target.classList.add("wrong");
                SetLock(true);
                option_array[question.ans-1].current.classList.add("correct")
            }
        }
        
    }
    const next = ()=>{
        if (lock=true) {
            if (index===data.length-1) {
                SetResult(true)
                return 0;
            }
            setIndex(++index);
            setQuestion(data[index]);
            SetLock(false);
            option_array.forEach((option)=>{
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return;
            })
        }
    }
    const reset=()=>{
        setIndex(0);
        setQuestion(data[0])
        SetScore(0);
        SetLock(false)
        SetResult(false)
    }

    return(
        <div className='container'>
            <h1>Quiz App</h1>
            <hr/>
            {result? <></>:<><h2>{index+1}. {question.question}</h2>
            <ul>
                <li ref={option1} onClick={(e)=>{checkans(e,1)}}>{question.option1}</li>
                <li ref={option2} onClick={(e)=>{checkans(e,2)}}>{question.option2}</li>
                <li ref={option3} onClick={(e)=>{checkans(e,3)}}>{question.option3}</li>
                <li ref={option4} onClick={(e)=>{checkans(e,4)}}>{question.option4}</li>
            </ul>
             <button onClick={next}>Next</button>
             <div className="index">{index+1} of {data.length } questions</div>
             </>}
            {result?<>
            <h2>You Scored {score} out of {data.length}</h2>
            <button onClick={reset}>Reset</button> 
            </>:<></>}
        </div>
    )
}

export default Quiz;