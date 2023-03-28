import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from './../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shpo = () => {

    const [products , setProducts] = useState([])
    const [cart ,setCart] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(()=>{
        const storeCard = getShoppingCart()
        // step 1 get id 
        for (const id in storeCard){
            const addedProduct = products.find(product => product.id == id)
            if(addedProduct){
                const quantity = addedProduct[id]
            addedProduct.quantity = quantity;
            }
        }
    },[products])

    const handleAddToCart = (product)=>{
        const newCart = [...cart , product];
        setCart(newCart)
        addToDb(product.id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shpo;