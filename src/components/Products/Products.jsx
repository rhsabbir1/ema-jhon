import React from 'react';
import './Products.css';

const Products = (props) => {
    // console.log(props.product)
    const { name, img, price, ratings, category, seller } = props.product;

    return (
        <div className='single-product'>
            <img src={img?img :"loading ..."} />
            <div className='product-content'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <p>Manufacturer : {seller}</p>
                <p>Rating : {ratings} Star</p>
            </div>
            <button className="add-btn">Add To Cade</button>
        </div>
    );
};

export default Products;