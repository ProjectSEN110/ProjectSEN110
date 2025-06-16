import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';    
import Footer from './Footer';
import '../Styles/App.css'

export const products = [
  {
    id: 1,
    name: 'Classic Sneakers',
    price: '$49.99',
    description: 'Comfortable and stylish sneakers for everyday wear.',
    image: '/sneakers.webp', 
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$99.99',
    description: 'Track your fitness and notifications with style.',
    image: '/smart watch.webp', 
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    price: '$79.99',
    description: 'High-quality sound with noise cancellation.',
    image: '/headphones.webp', 
  },
  {
    id: 4,
    name: 'Stylish Backpack',
    price: '$39.99',
    description: 'Perfect for school or travel, with plenty of space.',
    image: '/back pack.webp', 
  },

  {
    id: 5,
    name: 'Elegant Watch',
    price: '$199.99',
    description: 'A timeless piece for any occasion.',
    image: '/elegant watch.webp', 
  },
  {
    id: 6,
    name: 'Gaming Mouse',
    price: '$59.99',
    description: 'Precision and speed for the ultimate gaming experience.',
    image: '/gaming mouse.webp', 
  },

  {
    id: 7,
    name: 'Bluetooth Speaker',
    price: '$89.99',
    description: 'Portable speaker with rich sound quality.',
    image: '/blutooth speaker.webp', 
  },
  {
    id: 8,
    name: 'Leather Wallet',
    price: '$29.99',
    description: 'Stylish and durable wallet for everyday use.',
    image: '/wallet.webp', 
  },
];

export const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
  fontWeight: 'bold',
  cursor : 'pointer',
};


 function ProductList() {
  return (
    <div>
        <Header />
      <h2>Featured Products</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
              <img src={product.image} alt={product.name} width="100%" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </Link>
          </div>
        ))} 
      </div>
      <Footer/>
    </div>
  );
}
export default ProductList;