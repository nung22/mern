import React from 'react';
import { Link } from 'react-router-dom'

export default function ProductList(props) {
  return(
    <div className='text-center'>
      <h1 className='text-3xl font-semibold mb-4'>All Products:</h1>
      <ul className='flex flex-col gap-1 text-2xl'>
        {props.products.map( (product, i) => 
          <li key={i}>
            <Link to={`/products/${product._id}`} className="link link-hover">{product.title}</Link>
          </li>
          )}
      </ul>
    </div>
  )
}