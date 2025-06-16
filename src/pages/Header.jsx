import '../Styles/App.css'
import React from 'react';
import { Link ,} from 'react-router-dom';
import { linkStyle } from './ProductList';
function Header() {
  return (
    <header style={{ background: 'black', color: '#fff', padding: '15px' , width: '100%', alignItems: 'center', justifySelf: 'center'}}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>🛍️Tsakus'stores</h2>
        <div>
          <Link to="/home" style={linkStyle}>Home</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
          <Link to="/contact" style={linkStyle}>Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;