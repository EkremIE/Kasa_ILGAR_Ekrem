// Home.js
import React from 'react';
import Gallery from '../Components/Gallery/Gallery';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer"; // Ensure the path is correct

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
