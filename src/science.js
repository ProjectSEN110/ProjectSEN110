
import './App.css';
import React, { useState } from "react";

const questions = [
    {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
      },
      {
        question: "What gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
        answer: "Carbon Dioxide"
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NaCl"],
        answer: "H2O"
      },
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        answer: "Mitochondria"
      },
      {
        question: "What is the boiling point of water in Celsius?",
        options: ["100°C", "50°C", "0°C", "200°C"],
        answer: "100°C"
      },
      {
        question: "What is the main element in the sun?",
        options: ["Oxygen", "Hydrogen", "Helium", "Carbon"],
        answer: "Hydrogen"
      },
      {
        question: "Which planet is known as the Earth's twin?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Venus"
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Liver", "Skin", "Brain"],
        answer: "Skin"
      },
      {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Pb", "Fe"],
        answer: "Au"
      },
      {
        question: "Which element is essential for the formation of bones in the human body?",
        options: ["Calcium", "Magnesium", "Iron", "Phosphorus"],
        answer: "Calcium"
      },
      {
        question: "What is the most common gas in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
      },
      {
        question: "Which planet has the most moons?",
        options: ["Earth", "Mars", "Saturn", "Jupiter"],
        answer: "Saturn"
      },
      {
        question: "What is the chemical symbol for silver?",
        options: ["Ag", "Au", "Pb", "Fe"],
        answer: "Ag"
      },
      {
        question: "What type of animal is a Komodo dragon?",
        options: ["Mammal", "Reptile", "Bird", "Amphibian"],
        answer: "Reptile"
      },
      {
        question: "Which gas do humans exhale?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        answer: "Carbon Dioxide"
      },
      {
        question: "Which part of the human brain controls balance?",
        options: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Thalamus"],
        answer: "Cerebellum"
      },
      {
        question: "What is the most abundant element in the Earth's crust?",
        options: ["Iron", "Oxygen", "Aluminum", "Silicon"],
        answer: "Oxygen"
      },
      {
        question: "What is the formula for methane?",
        options: ["CH4", "CO2", "H2O", "O2"],
        answer: "CH4"
      },
      {
        question: "What is the process by which plants make their food?",
        options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
        answer: "Photosynthesis"
      },
      {
        question: "What is the most common blood type in humans?",
        options: ["O", "A", "B", "AB"],
        answer: "O"
      },
      {
        question: "How many chromosomes do humans have?",
        options: ["46", "23", "32", "48"],
        answer: "46"
      }
];

  function Science() {
  const [started, setStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(3);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState([]);
  const [randomQuestions, setRandomQuestions] = useState([]);

  function Startquiz() {
    const selectedRandom = [...questions]
      .sort(() => 0.5 - Math.random())
      .slice(0, questionCount);
    setRandomQuestions(selectedRandom);
    setStarted(true);
    setFinished(false);
    setSelected([]);
  }

  function handleResults() {
    let newScore = 0;
    randomQuestions.forEach((item, index) => {
      if (selected[index] === item.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setFinished(true);
  }

  if (!started) {
    return (
      <div className="quiz-container">
        <input
          type="number"
          value={questionCount}
          onChange={(e) => setQuestionCount(Number(e.target.value))}
          placeholder="Number of questions"
          className="quiz-input"
        />
        <button onClick={Startquiz} className="quiz-btn">Start Quiz</button>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="quiz-container">
        <h1 className="quiz-score">Your score is {score} / {randomQuestions.length}</h1>
        <button onClick={() => setStarted(false)} className="quiz-btn">Restart</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {randomQuestions.map((item, i) => (
        <div className="quiz-card" key={i}>
          <p className="quiz-question"><strong>Question {i + 1}:</strong> {item.question}</p>
          {item.options.map((opt, idx) => (
            <label key={idx} className="quiz-option">
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
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleResults} className="quiz-btn">Finish Quiz</button>
    </div>
  );
}
export default Science;