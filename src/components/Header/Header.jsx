import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" /> 
           <div>
                <a href="home">Home</a>
                <a href="/Order">Order</a>
                <a href="/about">Order Review</a>
                <a href="/update">Manage Inventory</a>
                <a href="/contact">Login</a>
           </div>
        </nav>
    );
};

export default Header;