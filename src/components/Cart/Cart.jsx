import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    let total = 0;
    let shipping = 0
    let quantity = 0;
    for (const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = total * 7 /100;
    const grandTotal = total + shipping + tax;

    return (
        <div className='oder-containe'>
             <h2>Order Summary</h2>
             <p>Selected Items: {quantity}</p>
             <p>Total Price: ${total}</p>
             <p>Total Shipping Charge: {shipping}</p>
             <p>Tax: ${tax.toFixed(2)}</p>
             <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;