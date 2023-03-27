import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="" /> 
           <div>
                <a href="/home">home</a>
                <a href="/about">about</a>
                <a href="update">update</a>
                <a href="contact">contact</a>
           </div>
        </nav>
    );
};

export default Header;