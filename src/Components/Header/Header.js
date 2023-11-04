import logo from '../../assets/LOGO.svg'
import Navbar from "../Navbar/Navbar";
import React from 'react';
import './Header.scss';
import backgroundImg from '../../assets/Background.jpeg';

function Header({ showBackground }) {
    return (
        <>
            <div className='kasa-header'>
                <img src={logo} alt='Kasa' className='kasa-logo' />
                <Navbar />
            </div>
            {showBackground && (
                <div className="box">
                    <div className="background">
                        <img src={backgroundImg} alt="Arrière-plan" className="background-image" />
                        <h2>Chez vous, partout et ailleurs</h2>
                    </div>
                </div>
            )}


        </>
    );
}
Header.defaultProps = {
    showBackground: true
};

export default Header;