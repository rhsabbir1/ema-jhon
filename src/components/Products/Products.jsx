import React from 'react';
import './Products.css';

const Products = (props) => {
    // console.log(props.product)
    const {name ,img , price , ratings ,category,seller} = props.product;

    return (
        <div className='single-product'>
             <img src={img}  />
        </div>
    );
};

export default Products;