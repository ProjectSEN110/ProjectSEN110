import React from 'react';
import '../Styles/App.css'
function Footer() {
  return (
    <footer style={{ background: '#222', color: '#fff', padding: '20px', marginTop: '40px' }}>
      <div style={{ textAlign: 'center' }}>
        <p>📍Vuna Market place Bwari,Abuja.</p>
        <p>📞 +234-91360-13931 | ✉️ contact@patiencejohn024@gmail.com</p>
        <p style={{ marginTop: '10px' }}>© {new Date().getFullYear()} TsakusMarket. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;