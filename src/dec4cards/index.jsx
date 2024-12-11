import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Accordion = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inputId, setInputId] = useState('');

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setInputId(e.target.value);
  };

  const handleSearch = () => {
    const product = products.find(p => p.id === parseInt(inputId));
    if (product) {
      setSelectedProduct(product);
    } else {
      alert('Product not found');
    }
  };

  return (
    <div>
      <h1>Product Search</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          value={inputId}
          onChange={handleInputChange}
          placeholder="Enter product ID"
          style={{ padding: '10px', marginRight: '10px' }}
        />
        <button onClick={handleSearch} style={{ padding: '10px' }}>
          Search
        </button>
      </div>

      {selectedProduct && (
        <div style={{
          padding: '20px',
          border: '2px solid #007BFF',
          marginTop: '20px',
          background: '#E7F3FF',
        }}>
          <h2>Product Details (ID: {selectedProduct.id})</h2>
          <img src={selectedProduct.image} alt={selectedProduct.title} style={{ width: '150px', height: 'auto' }} />
          <h3>{selectedProduct.title}</h3>
          <p>Price: ${selectedProduct.price}</p>
          <p>{selectedProduct.description}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Rating: {selectedProduct.rating.rate} ({selectedProduct.rating.count} reviews)</p>
          <button onClick={() => setSelectedProduct(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Accordion;
