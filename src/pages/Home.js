// Home.js
import React from 'react';
import Gallery from '../Components/Gallery';
import Header from "../Components/Header";
import Footer from "../Components/Footer"; // Ensure the path is correct

function Home() {
    return (
        <div>
            <Header />
            <Gallery />
            <Footer />
        </div>
    );
}

export default Home;

