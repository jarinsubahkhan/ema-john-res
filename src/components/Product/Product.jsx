import React from 'react';
import './Product.css'
const Product = (props) => {
    console.log(props.product)
    const {img, price, seller, name
, ratings, quantity} = props.product;
    return (
        <div className='product'>
      <img src={img} alt="" /> 
      <div className='product-info'>
      <h5 className='product-name'>{name}</h5> 
      <p className='product-price'>Price: ${price} </p> 
      <p className='manufacture'>Manufacturer: {seller} </p> 
      <p className='product-rating'>Rating: {ratings} star </p>  
        </div> 
        <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;