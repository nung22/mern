import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function Detail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
    .then(res => setProduct(res.data))
    .catch(err => console.error(err));
  }, [id]);

  const displayPrice = (price) => {
    return price !== undefined
      ? price.toFixed(2)
      : '';
  }

  return(
    <div className='mt-24 text-center text-xl'>
      <p className='text-2xl font-semibold mb-4'>{product.title}</p>
      <p>Price: ${displayPrice(product.price)}</p>
      <p>Description: {product.description}</p>
    </div>
  )
}