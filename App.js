import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Berlin', isCorrect: false },
    ],
  },
 
  {
    questionText: 'What is the largest planet?',
    answerOptions: [
      { answerText: 'Earth', isCorrect: false },
      { answerText: 'Mars', isCorrect: false },
      { answerText: 'Jupiter', isCorrect: true },
      { answerText: 'Saturn', isCorrect: false },
    ],
  },
  {
    questionText: 'What language is used for styling web pages?',
    answerOptions: [
      { answerText: 'HTML', isCorrect: false },
      { answerText: 'JQuery', isCorrect: false },
      { answerText: 'CSS', isCorrect: true },
      { answerText: 'XML', isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option.isCorrect)}>
                {option.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
