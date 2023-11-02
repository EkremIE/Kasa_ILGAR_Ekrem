// Gallery.js

import React from 'react';
import GalleryItem from '../Components/GalleryItem'; // Importez le composant GalleryItem

function Gallery() {
    // Exemple de données pour les titres de location (vous les récupérerez du fichier JSON ultérieurement)
    const galleryData = [
        { id: 1, title: 'Titre de location 1' },
        { id: 2, title: 'Titre de location 2' },
        { id: 3, title: 'Titre de location 3' },
        { id: 4, title: 'Titre de location 4' },
        { id: 5, title: 'Titre de location 5' },
        { id: 6, title: 'Titre de location 6' },
    ];

    return (
        <div className="gallery">
            {galleryData.map((item) => (
                <GalleryItem key={item.id} title={item.title} />
            ))}
        </div>
    );
}

export default Gallery;
