import '../Styles/GalleryItem.css'
import React from 'react';
import PropTypes from 'prop-types';

function GalleryItem({ title }) {
    return (
        <div className="gallery-item">

            <h3>{title}</h3>

        </div>
    );
}

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired, // Le titre est une chaîne de caractères requise
};

export default GalleryItem;
