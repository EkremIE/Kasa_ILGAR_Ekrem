import React from 'react';
import GalleryItem from './GalleryItem';
import jsonData from '../../logements.json';
import './Gallery.scss';

function Gallery() {
    return (
        <div className="gallery">
            {jsonData.map((item) => (
                <GalleryItem key={item.id} id={item.id} title={item.title} cover={item.cover} />
            ))}
        </div>
    );
}

export default Gallery;
