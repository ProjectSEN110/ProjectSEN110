import React, { useState } from 'react';

const symptoms = [ 
  "Fever",
  "Chills",
  "Sweating",
  "Headache",
  "Vomiting",
  "Muscle Pain",
];

function SymptomChecker() {
  const [checked, setChecked] = useState([]);
  const [risk, setRisk] = useState("");

  const toggleSymptom = (symptom) => {
    setChecked((prev) =>
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  const checkRisk = () => {
    if (checked.length <= 1) setRisk("Low");
    else if (checked.length <= 3) setRisk("Moderate");
    else setRisk("High");
  };

  return (
    <aside style={{ width: '1300px', backgroundColor: '#2c3e50', color: 'white', padding: '1rem' }}>
    <section id='sympp'>
      <h2>🩺 Symptom Checker</h2>
      <ul>
        {symptoms.map(symptom => (
          <li key={symptom}>
            <label>
              <input
                type="checkbox"
                checked={checked.includes(symptom)}
                onChange={() => toggleSymptom(symptom)}
              />
              {symptom}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={checkRisk}>Check Risk</button>
      {risk && <p><strong>Malaria Risk Level:</strong> {risk}</p>}
    </section>
    </aside>
  );
}

export default SymptomChecker;
