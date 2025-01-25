import React from 'react'
import { Link } from 'react-router-dom';

function Card({ product }) {
  const imageUrl = "https://vrs-pickles-backend.onrender.com" + product.images[0];
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