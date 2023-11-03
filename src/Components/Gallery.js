import React from 'react';
import GalleryItem from '../Components/GalleryItem'; // Importez le composant GalleryItem
import jsonData from '../logements.json'

function Gallery() {
    return (
        <div className="gallery">
            {jsonData.map((item) => (
                <GalleryItem key={item.id} title={item.title} cover={item.cover} />
            ))}
        </div>
    );

}

export default Gallery;
