import logo from '../assets/LOGO.svg'
import Navbar from "./Navbar";
import React from 'react';

function Header() {
    return (
        <div className='kasa-header'>
            <img src={logo} alt='Kasa' className='kasa-logo' />
            <Navbar />
        </div>
    );
}


export default Header;