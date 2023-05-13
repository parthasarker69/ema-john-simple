import React from 'react';
import './Navbar.css'
import logo from './Logo.svg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href="./home">Order </a>
                <a href="./products">Order Review</a>
                <a href="./buy-now">Manage Inventory</a>
                <a href="./about-us">Log in</a>
            </div>
        </div>
    );
};

export default Navbar;