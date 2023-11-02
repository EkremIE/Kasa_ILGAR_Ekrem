import logo from '../assets/LOGO.svg'
import Navbar from "./Navbar";
import React from 'react';

function Header({ children }) {
    return (
        <div className='kasa-header'>
            <img src={logo} alt='Kasa' className='kasa-logo' />
            <Navbar />
            {children}
        </div>
    );
}


export default Header;