import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const Previous = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const Next = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <div className="carousel-container">
                <button className="carousel-arrow left" onClick={Previous}>&lt;</button>
                <button className="carousel-arrow right" onClick={Next}>&gt;</button>
                {images.map((image, index) => (
                    <img
                        key={image}
                        className={`carousel-image ${currentIndex === index ? "carousel-image-active" : ""}`}
                        src={image}
                        alt={`Slide ${index}`}
                        style={{ display: currentIndex === index ? 'block' : 'none' }}
                    />
                ))}
                <div className="carousel-counter">
                    {`${currentIndex + 1}/${images.length}`}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
