import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props)
    const {img, price, seller, name
, ratings, quantity} = props.product;
const handleCart = props.handleCart;


    return (
        <div className='product'>
      <img src={img} alt="" /> 
      <div className='product-info'>
      <h5 className='product-name'>{name}</h5> 
      <p className='product-price'>Price: ${price} </p> 
      <p className='manufacture'>Manufacturer: {seller} </p> 
      <p className='product-rating'>Rating: {ratings} star </p>  
        </div> 
         <button onClick={() => handleCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button> 
        </div>
    );
};

export default Product;