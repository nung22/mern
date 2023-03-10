import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(res => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, [products]);

  const removeFromDOM = productId => {
    setProducts(products.filter(product => product._id !== productId))
  }

  return (
    <div>
      <h1 className='text-center text-2xl font-semibold'>Product Manager</h1>
      <ProductForm/>
      <hr className='my-8'/>
      {loaded && <ProductList products={products} removeFromDOM={removeFromDOM} />}
    </div>
  )
}