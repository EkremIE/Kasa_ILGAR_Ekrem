import React, { useState } from 'react';
import './Carrousel.scss';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <button className="carousel-arrow left" onClick={goToPrevious}>&lt;</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            <button className="carousel-arrow right" onClick={goToNext}>&gt;</button>
        </div>
    );
};

export default Carousel;
