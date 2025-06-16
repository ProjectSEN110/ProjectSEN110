import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './ProductList';
import '../Styles/productdetails.css';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  if (!product) return <p>Product not found.</p>;

  return (
    <div className='container'>
        <button className='back-btn' onClick={handleBack}>Back</button>
      <img src={product.image} alt={product.name} />

      <div className="product-details">
            <h2>{product.name}</h2>
            <p><strong>Price:</strong> {product.price}</p>
            <p>{product.description}</p>

            <div className='buttons'>
                <button>Add to Cart</button>
                <button>Buy Now</button>
            </div>

      </div>

    </div>
  );
}
export default ProductDetails;