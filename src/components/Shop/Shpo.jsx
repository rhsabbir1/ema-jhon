import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from './../Products/Products';

const Shpo = () => {

    const [products , setProducts] = useState([])
    const [cart ,setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product)=>{
        const newCart = [...cart , product];
        setCart(newCart)
    }

    return (
        <div className='shpo-continer'>
            <div className='product-container'>
                {
                   products.map(product =><Products
                   key={product.id}
                   product={product}
                   handleAddToCart={handleAddToCart}
                   ></Products>) 
                }
            </div>
            <div className='oder-container'>
                <h2>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shpo;