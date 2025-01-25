import React from 'react'
import { Link } from 'react-router-dom';

function Card({ product }) {
  const imageUrl = "http://127.0.0.1:8000" + product.images[0];
  const route = "/products/"+ product._id ;
  return (
    <div className='card'>
      <Link to={route}>
        <img src={imageUrl} alt="Product Image" className='product__image' />
      </Link>
      <p className='product__title'>{product.title}</p>
      <p className='product__price'>{product.price}</p>
    </div>
  )
}

export default Card