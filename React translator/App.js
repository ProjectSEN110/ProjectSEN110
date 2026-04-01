
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLang, setTargetLang] = useState('es');
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        'https://libretranslate.com/translate',
        {
          q: text,
          source: 'en',
          target: targetLang,
          format: 'text',
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      setTranslatedText(response.data.translatedText);
    } catch (error) {
      alert('Translation failed.');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>React Translator</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text in English"
      />
      <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="it">Italian</option>
        <option value="ru">Russian</option>
      </select>
      <button onClick={handleTranslate} disabled={loading}>
        {loading ? 'Translating...' : 'Translate'}
      </button>
      <h2>Translation:</h2>
      <div className="output">{translatedText}</div>
    </div>
  );
}

export default App;


