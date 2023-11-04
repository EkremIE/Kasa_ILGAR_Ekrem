import './GalleryItem.scss'
import React from 'react';
import PropTypes from 'prop-types';
import {useNavigate} from "react-router-dom";

function GalleryItem({ id, title, cover }) {
    let navigate = useNavigate();

    const navigateToAccommodation = () => {
        navigate(`/accommodation/${id}`);
    };

    return (
        <div className="gallery-item" onClick={navigateToAccommodation}>
            <img src={cover} alt={`Couverture de ${title}`} />
            <h3>{title}</h3>
        </div>
    );
}

GalleryItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
};

export default GalleryItem;
