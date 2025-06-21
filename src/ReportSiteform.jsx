import React, { useState } from 'react';

function ReportSiteForm() {
  const [data, setData] = useState({ location: '', desc: '', image: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reported breeding site successfully!");
    setData({ location: '', desc: '', image: null });
  };

  return (
    <aside style={{ width: '1300px', backgroundColor: '#2c3e50', color: 'white', padding: '1rem' }}>
    <section id='reporta'>
      <h2>Report Breeding Site</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Location"
          value={data.location}
          onChange={e => setData({ ...data, location: e.target.value })}
          required
        /><br />
        <textarea
          placeholder="Description"
          value={data.desc}
          onChange={e => setData({ ...data, desc: e.target.value })}
          required
          
        /><br />
        <input
          type="file"
          onChange={e => setData({ ...data, image: e.target.files[0] })}
        /><br />
        <button type="submit">Report</button>
      </form>
    </section>
    </aside>
  );
}

export default ReportSiteForm;
