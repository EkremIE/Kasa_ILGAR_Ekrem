// GalleryItem.js

import React from 'react';
import PropTypes from 'prop-types';

function GalleryItem({ title }) {
    return (
        <div className="gallery-item">
            {/* Afficher le titre de location */}
            <h3>{title}</h3>
            {/* Ajouter d'autres éléments de la carte ici */}
        </div>
    );
}

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired, // Le titre est une chaîne de caractères requise
};

export default GalleryItem;
