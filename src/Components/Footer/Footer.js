import React from 'react';
import LOGOfooter from "../../assets/LOGO-footer.png";
import './Footer.scss';


function Footer() {
    return (
        <div className='kasa-footer'>
            <img src={LOGOfooter} alt='Kasa' className='kasa-logo' />
            <p className="text-wrapper">© 2020 Kasa. All rights reserved</p>
        </div>
    )

}

export default Footer ;