// Home.js
import React from 'react';
import Gallery from '../Components/Gallery/Gallery';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import './Home.scss';

function Home() {
    return (
        <div className="Home">
            <Header />
            <Gallery />
            <Footer />
        </div>
    );
}

export default Home;

