import React, { useRef, useState, useEffect } from "react";
import './Quiz.css';
import { data } from "../../assets/data";
import { useNavigate } from "react-router-dom";

const Quiz = ({userName}) => {
    const [index, setIndex] = useState(0);
    const [question, setquestion] = useState(data[0])
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const optionArray = [option1, option2, option3, option4];
    const navigate=useNavigate()

    useEffect(()=> {
        setquestion(data[index])
    },[index])

    const verifyAns = (e, ans) => {
        if (!lock) {
            if (question.ans === ans) {
                e.target.classList.add("correct");
                setScore((prev) => prev + 1);
            } else {
                e.target.classList.add("wrong");
                optionArray[question.ans - 1].current.classList.add("correct");
            }
            setLock(true);
        }
    };

    const nextBtn = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true);
            } else {
                setIndex((prev) => prev + 1);
            }
            setLock(false);
            optionArray.forEach((option) => {
                option.current.classList.remove("correct");
                option.current.classList.remove("wrong");
            });
        }
        else{
            alert("You need to select an option before you proceed");
        }
    };

    const resetQuiz = () => {
        setIndex(0);
        setScore(0);
        setquestion(data[0])
        setResult(false);
        setLock(false);
        optionArray.forEach((option) => {
            option.current.classList.remove("correct");
            option.current.classList.remove("wrong");
        });
        navigate("/start");
    };

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            {!result ? (
                <>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={option1} onClick={(e) => verifyAns(e, 1)}><b>{question.option1}</b></li>
                        <li ref={option2} onClick={(e) => verifyAns(e, 2)}><b>{question.option2}</b></li>
                        <li ref={option3} onClick={(e) => verifyAns(e, 3)}><b>{question.option3}</b></li>
                        <li ref={option4} onClick={(e) => verifyAns(e, 4)}><b>{question.option4}</b></li>
                    </ul>
                    <button onClick={nextBtn}><b>Next question</b></button>
                    <div className="index"><b>{index + 1} of {data.length} questions</b></div>
                </>
            ) : (
                <>
                    <h2>{userName} You scored {score} out of {data.length}</h2>
                    <button onClick={resetQuiz}>Reset</button>
                </>
            )}
        </div>
    );
};
export default Quiz;
