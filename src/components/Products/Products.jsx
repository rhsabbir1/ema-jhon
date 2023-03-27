import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Products = (props) => {
    // console.log(props.product)
    const { name, img, price, ratings, seller } = props.product;

    const handleAddToCart = props.handleAddToCart;
    

    return (
        <div className='single-product'>
            <img src={img?img :"loading ..."} />
            <div className='product-content'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Star</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className="add-btn">
                Add To Cade
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
          
        </div>
    );
};

export default Products;