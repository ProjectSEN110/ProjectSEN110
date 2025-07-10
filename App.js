import React, { useState } from 'react';
import './App.css';

function App() {
  const quotes = [
    "The secret of getting ahead is getting started.",
    "Believe you can and you're halfway there.",
    "Do what you can, with what you have, where you are.",
    "All it takes is a beautiful fake smile to hide an injured soul, and they will never notice how broken you really are.",
    "Dream big and dare to fail.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "In the end, it’s not the years in your life that count. It’s the life in your years.",
    "Aspire to inspire before you expire",
    "The greatest day in your life and mine is when we take total responsibility for our attitudes.That’s the day we truly grow up.",
    "Life is not a problem to be solved, but a reality to be experienced.",
    "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds",
    "Life is ten percent what happens to you and ninety percent how you respond to it.",
    "Believe that life is worth living and your belief will help create the fact.",
    "Even if the world crumbles, no matter who shakesthis earth, don't let go of my hand.",
    "Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.",
    "Losing your life is not the worst thing that can happen. The worst thing is to lose your reason for living.",
    "You're like a grey sky. You're beautiful, even though you don't want to be.",
  ];

  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
 
  const getNewQuote = () => {
    const randomize = Math.floor(Math.random()* quotes.length);
    setQuote(quotes[randomize]);
  };

  return (
    <div class ="tank">
      <h1>🕊 Quote in the moment of time. 🕊 </h1>
      <p class ="quote">{quote}</p>
      <button class="button" onClick={getNewQuote}>Relive to inspire </button>
    </div>
  );
}

export default App;
