import React, { useState } from 'react';
import myImage from './assets/water.PNG'
import myImage2 from './assets/nets.jpg'
import myImage3 from './assets/malaria 1.PNG'

const info = [
  { title: "Use Mosquito Nets", desc: "Always sleep under a treated net.", image: myImage2 },
  { title: "Drain Standing Water", desc: "Prevent mosquitoes from breeding.", image:myImage },
  { title: "Recognize Symptoms", desc: "Fever, chills, and vomiting are signs.", image: myImage3 },
];

function AwarenessCards() {
  return (
    <aside style={{ width: '1300px', backgroundColor: '#2c3e50', color: 'white', padding: '1rem' }}>
    <section>
      <h2 id='Awareee'>📢Awareness & Prevention</h2>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {info.map((card, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
            <img src={`${card.image}`} alt={card.title} width="100%" />
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </aside>
  );
}

export default AwarenessCards;
