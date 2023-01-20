import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
export default function Main() {
  return (
    <div>
      <h1 className='text-center text-2xl font-semibold'>Product Manager</h1>
      <ProductForm/>
    </div>
  )
}