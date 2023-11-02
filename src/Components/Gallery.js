import React from 'react';
import GalleryItem from '../Components/GalleryItem'; // Importez le composant GalleryItem
import jsonData from '../logements.json'

function Gallery() {
    return (
        <div className="gallery">
            {jsonData.map((item) => (
                <GalleryItem key={item.id} title={item.title} />
            ))}
        </div>
    );

}

export default Gallery;
