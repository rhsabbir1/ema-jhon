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


    const handleAddToCart = (product)=>{
        const newCart = [...cart , product];
        setCart(newCart)
        addToDb(product.id)
    }
    useEffect(()=>{
        console.log(products)
        const storeCart = getShoppingCart()
        const saveCart =[]
        for(const id in storeCart){
            const addedProduct = products.find(product=> product.id === id)
          if(addedProduct){
              const quantity = storeCart[id];
             addedProduct.quantity =quantity;
             saveCart.push(addedProduct)
          }
                          
        }
        setCart[saveCart]
    },[products])

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