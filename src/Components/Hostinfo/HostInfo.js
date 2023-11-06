import React from 'react';
import './HostInfo.scss';
//import accommodations from '../../logements.json';

function HostInfo({ name, picture, rating, location, tags }) {
    return (
        <section className="host-info">
            <div className="host">
                <div className="host-name">{name}</div>
                <img className="host-picture" src={picture} alt={`Hébergé par ${name}`} />
                <div className="rating">Note : {rating} étoiles</div>
            </div>

            <div className="location">Lieu : {location}</div>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                ))}
            </div>
        </section>
    );
}


export default HostInfo;



