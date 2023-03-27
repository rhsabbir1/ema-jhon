import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shpo = () => {

    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='shpo-continer'>
            <div>
                <h1>Products here : {products.length}</h1>
            </div>
            <div>
                <h2>Order Summary</h2>
            </div>
        </div>
    );
};

export default Shpo;