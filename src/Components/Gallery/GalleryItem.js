import './GalleryItem.scss'
import React from 'react';
import PropTypes from 'prop-types';

function GalleryItem({ title, cover }) {
    return (
        <div className="gallery-item">
            <img src={cover} alt={`Couverture de ${title}`} />
            <h3>{title}</h3>

        </div>
    );
}

GalleryItem.propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default GalleryItem;
