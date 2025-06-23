// src/Computer.js

import React, { useState } from "react";
import './App.css'; 

const questions = [
  {
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Which of these is a programming language?",
    options: ["HTML", "HTTP", "Python", "WiFi"],
    answer: "Python"
  },
  {
    question: "What is the brain of the computer?",
    options: ["Monitor", "Keyboard", "CPU", "Hard Drive"],
    answer: "CPU"
  },
  {
    question: "What does RAM stand for?",
    options: ["Random Access Memory", "Read Access Memory", "Run Access Memory", "Random Allowed Memory"],
    answer: "Random Access Memory"
  },
  {
    question: "Which device is used for input?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    answer: "Keyboard"
  },
  {
    question: "Which company developed Windows OS?",
    options: ["Apple", "Microsoft", "IBM", "Intel"],
    answer: "Microsoft"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyperlinks Text Markup Language", "Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What type of device is a printer?",
    options: ["Input", "Output", "Storage", "Processing"],
    answer: "Output"
  },
  {
    question: "Which key is used to refresh a web page?",
    options: ["F5", "F2", "Esc", "F1"],
    answer: "F5"
  },
  {
    question: "Which one is not an operating system?",
    options: ["Linux", "Windows", "MacOS", "Oracle"],
    answer: "Oracle"
  },
  {
    question: "Which component stores data permanently?",
    options: ["RAM", "ROM", "Cache", "Hard Drive"],
    answer: "Hard Drive"
  },
  {
    question: "What does URL stand for?",
    options: ["Uniform Resource Locator", "Universal Reference Link", "Unified Resource Link", "Uniform Reference Locator"],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Which is not a web browser?",
    options: ["Chrome", "Firefox", "Safari", "Facebook"],
    answer: "Facebook"
  },
  {
    question: "What is phishing?",
    options: ["Fishing on a computer game", "Fraudulent email trick", "A coding style", "Hacking software"],
    answer: "Fraudulent email trick"
  },
  {
    question: "Which company makes iPhones?",
    options: ["Google", "Samsung", "Apple", "Microsoft"],
    answer: "Apple"
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "Python", "CSS", "C++"],
    answer: "CSS"
  },
  {
    question: "What is the shortcut for 'copy'?",
    options: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"],
    answer: "Ctrl + C"
  },
  {
    question: "Which of these is not hardware?",
    options: ["Monitor", "RAM", "Operating System", "Keyboard"],
    answer: "Operating System"
  },
  {
    question: "What does SSD stand for?",
    options: ["Solid State Drive", "Small Storage Device", "Secure Software Disk", "Solid Storage Drive"],
    answer: "Solid State Drive"
  },
  {
    question: "Which of these is a database software?",
    options: ["MySQL", "Photoshop", "Excel", "Chrome"],
    answer: "MySQL"
  },
  {
    question: "Which port is used for the internet connection?",
    options: ["USB", "HDMI", "Ethernet", "VGA"],
    answer: "Ethernet"
  },
  {
    question: "Which device connects computers to a network?",
    options: ["Router", "Printer", "Scanner", "Speaker"],
    answer: "Router"
  },
  {
    question: "Which of these is a search engine?",
    options: ["Yahoo", "Facebook", "Gmail", "YouTube"],
    answer: "Yahoo"
  },
  {
    question: "What is the full form of PDF?",
    options: ["Portable Document Format", "Printed Data File", "Page Description File", "Programmed Document File"],
    answer: "Portable Document Format"
  },
  {
    question: "What does AI stand for?",
    options: ["Artificial Integration", "Automated Input", "Artificial Intelligence", "Automated Interface"],
    answer: "Artificial Intelligence"
  },
  {
    question: "Which of these is used to build Android apps?",
    options: ["Python", "Swift", "Kotlin", "C#"],
    answer: "Kotlin"
  },
  {
    question: "Where are cookies stored?",
    options: ["Client side", "Server", "Router", "Firewall"],
    answer: "Client side"
  },
  {
    question: "What is an IP address?",
    options: ["Personal email", "Internet ID", "Unique network address", "Image protocol"],
    answer: "Unique network address"
  },
  {
    question: "Which company owns YouTube?",
    options: ["Facebook", "Apple", "Google", "Amazon"],
    answer: "Google"
  },
  {
    question: "What does GPU stand for?",
    options: ["Graphics Processing Unit", "General Process Utility", "Graphic Program Unit", "Global Processing Unit"],
    answer: "Graphics Processing Unit"
  }
];


function Computer() {
  const [started, setStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState([]);
  const [randomQuestions, setRandomQuestions] = useState([]);

  const startQuiz = () => {
    const selectedRandom = [...questions]
      .sort(() => 0.5 - Math.random())
      .slice(0, questionCount);
    setRandomQuestions(selectedRandom);
    setStarted(true);
  };

  const handleResults = () => {
    let newScore = 0;
    randomQuestions.forEach((item, index) => {
      if (selected[index] === item.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setFinished(true);
  };

  if (!started) {
    return (
      <div>
        <input
          type="number"
          min="1"
          max={questions.length}
          value={questionCount}
          onChange={(e) => setQuestionCount(Number(e.target.value))}
          placeholder="Number of Questions"
        />
        <button onClick={startQuiz}>Start Quiz</button>
      </div>
    );
  }

  if (finished) {
    return (
      <h2>Your score is {score} / {randomQuestions.length}</h2>
    );
  }

  return (
    <div>
      {randomQuestions.map((item, i) => (
        <div key={i}>
          <p>QUESTION {i + 1}: {item.question}</p>
          {item.options.map((opt, index) => (
            <div key={index}>
              <label>
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
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleResults}>Finish Quiz</button>
    </div>
  );
}

export default Computer;
