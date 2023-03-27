import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from './../Products/Products';

const Shpo = () => {

    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='shpo-continer'>
            <div className='product-container'>
                {
                   products.map(product =><Products
                   key={product.id}
                   product={product}
                   ></Products>) 
                }
            </div>
            <div className='oder-container'>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shpo;