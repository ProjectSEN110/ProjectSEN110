import React, { useState } from 'react';
import './translator.css';
import dictionary from './language.json';

export default function Translator() {
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('Translation');
    const [inputLang, setInputLang] = useState('en');
    const [outputLang, setOutputLang] = useState('fr');

    const handleTranslate = () => {
        const normalized = inputText.trim().toLowerCase();
        const translation = dictionary[normalized]?.[outputLang];

        if (translation) {
            setTranslatedText(translation);
        } else {
            setTranslatedText("Translation not found.");
        }
    };

    return (
        <div className="translator-container">
            <div className="language-selectors">
                <select value={inputLang} onChange={(e) => setInputLang(e.target.value)}>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                </select>
                <span>➡</span>
                <select value={outputLang} onChange={(e) => setOutputLang(e.target.value)}>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                    <option value="de">German</option>
                    <option value="en">English</option>
                </select>
            </div>

            <textarea
                className="input-box"
                placeholder="Enter text (e.g., hello)"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />

            <button onClick={handleTranslate} className="translate-button">
                Translate
            </button>

            <div className="output-box">
                <strong>Output:</strong>
                <p>{translatedText}</p>
            </div>
        </div>
    );
}