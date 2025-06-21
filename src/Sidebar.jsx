import React from 'react';

function Sidebar() {
  return (
    <aside style={{ width: '1300px', backgroundColor: '#2c3e50', color: 'white', padding: '1rem' }}>
      <nav>
        <p><a href='Header.jsx#mala'>🏠 Dashboard</a></p>
        <p><a href='Symptoms.jsx#sympp'>🩺 Symptom Checker</a></p>
        <p><a href='Vidme.jsx#Awareee'>📢 Awareness</a></p>
        <p><a href='ReportSiteform.jsx#reporta'> 🧡 Report Site</a></p>
        <p><a href='RiskMap.jsx#riska'>🗺️ Risk Zones</a></p>
        <p><a href='VolunteerForm.jsx#volunteera'>🤝 Volunteer</a></p>
      </nav>
    </aside>
  );
}

export default Sidebar;
