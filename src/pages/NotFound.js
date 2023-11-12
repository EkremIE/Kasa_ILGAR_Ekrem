import React from 'react';
import Header from "../Components/Header/Header";
import {Link} from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import './Notfound.scss';

function NotFound() {
    return (
        <>
        <Header showBackground={false} />
        <div className='Error'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <ul>
                <li><Link to="/">Retourner sur la page d’accueil</Link></li>
            </ul>

        </div>
            <Footer />
    </>
    )
}

export default NotFound;
