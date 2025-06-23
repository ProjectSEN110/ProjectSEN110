import React, { useState } from "react";

 const questions = [
  { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "HyperText Markup Language", "HyperText Markdown Language", "HighText Machine Language"], answer: "HyperText Markup Language" },
  { question: "Which language is used for styling web pages?", options: ["HTML", "jQuery", "CSS", "XML"], answer: "CSS" },
  { question: "What does the 'var' keyword do in JavaScript?", options: ["Defines a constant", "Declares a variable", "Creates a function", "None of the above"], answer: "Declares a variable" },
  { question: "What is the correct syntax to output in JavaScript?", options: ["print()", "console.log()", "echo()", "printf()"], answer: "console.log()" },
  { question: "What symbol is used for comments in JavaScript?", options: ["//", "#", "<!-- -->", "/* */"], answer: "//" },
  { question: "Which company developed JavaScript?", options: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"], answer: "Netscape" },
  { question: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which tag is used to link JavaScript to HTML?", options: ["<js>", "<script>", "<link>", "<javascript>"], answer: "<script>" },
  { question: "Which of the following is not a JavaScript data type?", options: ["Boolean", "Number", "Float", "Undefined"], answer: "Float" },
  { question: "What method can convert a JSON string to an object?", options: ["JSON.toObject()", "JSON.parse()", "JSON.stringify()", "JSON.decode()"], answer: "JSON.parse()" },
  { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], answer: "<style>" },
  { question: "Which symbol is used to select an ID in CSS?", options: ["#", ".", "&", "@"], answer: "#" },
  { question: "Which is not a JavaScript loop?", options: ["for", "while", "foreach", "loop"], answer: "loop" },
  { question: "How do you create a function in JavaScript?", options: ["function myFunc()", "create function myFunc()", "function:myFunc()", "define myFunc()"], answer: "function myFunc()" },
  { question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "myFunction()", "Call.myFunction()", "function myFunction()"], answer: "myFunction()" },
  { question: "Which of the following is used to declare a constant in JS?", options: ["let", "var", "const", "define"], answer: "const" },
  { question: "Which of these is a CSS framework?", options: ["React", "Angular", "Bootstrap", "Node"], answer: "Bootstrap" },
  { question: "Which HTML element is used for the largest heading?", options: ["<h1>", "<h6>", "<head>", "<header>"], answer: "<h1>" },
  { question: "What keyword is used to export functions in JavaScript modules?", options: ["import", "require", "export", "module"], answer: "export" },
  { question: "What function is used to round numbers in JavaScript?", options: ["Math.floor()", "Math.round()", "Math.ceil()", "Math.fix()"], answer: "Math.round()" },
  { question: "Which of these is used to comment multi-line in JavaScript?", options: ["<!-- -->", "#...#", "/*...*/", "//...//"], answer: "/*...*/" },
  { question: "What is the result of typeof [] in JavaScript?", options: ["object", "array", "list", "undefined"], answer: "object" },
  { question: "What is the output of 2 + '2' in JS?", options: ["4", "22", "NaN", "Error"], answer: "22" },
  { question: "Which HTML tag is used to display a checkbox?", options: ["<input type='checkbox'>", "<checkbox>", "<input type='box'>", "<box>"], answer: "<input type='checkbox'>" },
  { question: "Which HTML element is used to play audio files?", options: ["<audio>", "<sound>", "<music>", "<player>"], answer: "<audio>" },
  { question: "Which method adds a new element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
  { question: "What does 'DOM' stand for?", options: ["Document Object Model", "Data Object Model", "Digital Object Map", "Desktop Object Manager"], answer: "Document Object Model" },
  { question: "Which company maintains the React library?", options: ["Google", "Microsoft", "Facebook", "Apple"], answer: "Facebook" },
  { question: "Which function is used to delay code execution in JavaScript?", options: ["wait()", "timeout()", "setTimeout()", "pause()"], answer: "setTimeout()" },
  { question: "How do you write 'Hello World' in an alert box in JS?", options: ["msg('Hello World')", "alertBox('Hello World')", "alert('Hello World')", "message('Hello World')"], answer: "alert('Hello World')" }
];

function Coding() {
  const [started, setStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState([]);
  const [randomQuestions, setRandomQuestions] = useState([]);

  const startQuiz = () => {
    const selected = [...questions].sort(() => 0.5 - Math.random()).slice(0, questionCount);
    setRandomQuestions(selected);
    setStarted(true);
  };

  const handleResults = () => {
    let tempScore = 0;
    randomQuestions.forEach((q, i) => {
      if (selected[i] === q.answer) tempScore++;
    });
    setScore(tempScore);
    setFinished(true);
  };

  if (!started) {
    return (
      <>
        <input type="number" placeholder="Number of Questions" value={questionCount} onChange={(e) => setQuestionCount(Number(e.target.value))} />
        <button onClick={startQuiz}>Start Quiz</button>
      </>
    );
  }

  if (finished) return <h1>Your score is {score} / {randomQuestions.length}</h1>;

  return (
    <>
      {randomQuestions.map((q, i) => (
        <div key={i}>
          <p>Question {i + 1}: {q.question}</p>
          {q.options.map((opt, idx) => (
            <label key={idx}>
              <input type="radio" name={`q-${i}`} value={opt} onChange={() => {
                const updated = [...selected];
                updated[i] = opt;
                setSelected(updated);
              }} />
              {opt}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleResults}>Finish Quiz</button>
    </>
  );
}

export default Coding;
