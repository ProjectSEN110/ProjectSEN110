
import './App.css'
import React, { useState } from "react";







export const questions = [
  { question: "Who was the first President of the United States?", options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"], answer: "George Washington" },
  { question: "In which year did World War II end?", options: ["1940", "1943", "1945", "1950"], answer: "1945" },
  { question: "What empire was ruled by Julius Caesar?", options: ["Greek Empire", "Roman Empire", "Ottoman Empire", "British Empire"], answer: "Roman Empire" },
  { question: "The Great Wall of China was built to protect against which group?", options: ["Romans", "Huns", "Mongols", "Vikings"], answer: "Mongols" },
  { question: "What year did the Titanic sink?", options: ["1905", "1912", "1920", "1898"], answer: "1912" },
  { question: "Who discovered America in 1492?", options: ["Christopher Columbus", "Leif Erikson", "Amerigo Vespucci", "Ferdinand Magellan"], answer: "Christopher Columbus" },
  { question: "What war was fought between the North and South regions in the United States?", options: ["World War I", "Revolutionary War", "Civil War", "Vietnam War"], answer: "Civil War" },
  { question: "Who was the British Prime Minister during most of World War II?", options: ["Neville Chamberlain", "Winston Churchill", "Tony Blair", "Margaret Thatcher"], answer: "Winston Churchill" },
  { question: "Where was Napoleon Bonaparte born?", options: ["France", "Corsica", "Italy", "Spain"], answer: "Corsica" },
  { question: "Which civilization built Machu Picchu?", options: ["Maya", "Aztec", "Inca", "Olmec"], answer: "Inca" },
  { question: "Who was the first man to step on the Moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"], answer: "Neil Armstrong" },
  { question: "The Cold War was primarily between the USA and which other country?", options: ["China", "Germany", "Russia", "Soviet Union"], answer: "Soviet Union" },
  { question: "What wall fell in 1989, symbolizing the end of the Cold War?", options: ["Great Wall of China", "Berlin Wall", "Hadrian's Wall", "Western Wall"], answer: "Berlin Wall" },
  { question: "Who was the Egyptian queen famous for her relationships with Julius Caesar and Mark Antony?", options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isis"], answer: "Cleopatra" },
  { question: "What was the name of the ship on which the Pilgrims traveled to North America?", options: ["Santa Maria", "Mayflower", "Endeavour", "Victoria"], answer: "Mayflower" },
  { question: "In what year did the French Revolution begin?", options: ["1789", "1776", "1804", "1812"], answer: "1789" },
  { question: "Which U.S. president abolished slavery?", options: ["George Washington", "Abraham Lincoln", "Theodore Roosevelt", "Thomas Jefferson"], answer: "Abraham Lincoln" },
  { question: "What was the capital of the Byzantine Empire?", options: ["Rome", "Athens", "Istanbul", "Constantinople"], answer: "Constantinople" },
  { question: "Who wrote the Declaration of Independence?", options: ["George Washington", "John Adams", "Thomas Jefferson", "Benjamin Franklin"], answer: "Thomas Jefferson" },
  { question: "Which war ended with the Treaty of Versailles?", options: ["World War I", "World War II", "Napoleonic Wars", "Cold War"], answer: "World War I" },
  { question: "What was the main language of the Roman Empire?", options: ["Greek", "Latin", "Arabic", "Hebrew"], answer: "Latin" },
  { question: "Who painted the ceiling of the Sistine Chapel?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], answer: "Michelangelo" },
  { question: "What U.S. event happened on July 4, 1776?", options: ["End of Civil War", "Signing of Constitution", "Declaration of Independence", "Boston Tea Party"], answer: "Declaration of Independence" },
  { question: "Which explorer was the first to sail around the world?", options: ["Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "James Cook"], answer: "Ferdinand Magellan" },
  { question: "Which country gifted the Statue of Liberty to the United States?", options: ["England", "Germany", "France", "Italy"], answer: "France" },
  { question: "Where did the Industrial Revolution begin?", options: ["France", "USA", "Germany", "Great Britain"], answer: "Great Britain" },
  { question: "Which war was fought between the Allies and Axis powers?", options: ["World War I", "World War II", "Korean War", "Vietnam War"], answer: "World War II" },
  { question: "Which Roman emperor built a wall across Britain?", options: ["Nero", "Hadrian", "Augustus", "Tiberius"], answer: "Hadrian" },
  { question: "What famous speech did Martin Luther King Jr. deliver in 1963?", options: ["We Shall Overcome", "I Have a Dream", "Yes We Can", "The Promised Land"], answer: "I Have a Dream" },
  { question: "Which ancient city was buried under volcanic ash in 79 AD?", options: ["Athens", "Pompeii", "Rome", "Troy"], answer: "Pompeii" }
];



export default function History() {
  
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


