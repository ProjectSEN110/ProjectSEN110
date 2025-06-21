import React, { useState } from 'react';

function VolunteerForm() {
  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for volunteering, ${form.name}!`);
    setForm({ name: '', email: '' });
  };

  return (
    <aside style={{ width: '1300px', backgroundColor: '#2c3e50', color: 'white', padding: '1rem' }}>
    <section>
        
      <h2 id='volunteera'>🤝 Volunteer Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          required
        /><br />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          required
        /><br />
        <button type="submit">Sign Up</button>
      </form>
    </section>
    </aside>
  );
}

export default VolunteerForm;
