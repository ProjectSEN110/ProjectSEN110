import React from 'react';
import myImage from './assets/risk-map.png'
function RiskMap() {
  return (
    <aside style={{ width: '1300px', backgroundColor: '#2c3e50', color: 'white', padding: '1rem' }}>
    <section>
      <h2 id='riska'>🗺️ High-Risk Zones</h2>
      <img src={myImage} alt="Risk Zones Map" style={{ width: '100%' }} />
    </section>
    </aside>
    
  );
}

export default RiskMap;
