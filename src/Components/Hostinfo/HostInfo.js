import React from 'react';
import './HostInfo.scss';


function HostInfo({ title, name, picture, rating, location, tags }) {
    // Divise le nom en prénom et nom en utilisant un espace comme séparateur
    const [firstName, lastName] = name.split(' ');

    return (
        <section className="host-info-container">
            <div className="left-container">
                <h2 className="accommodation-title">{title}</h2>
                <div className="location-tags-container">
                    <div className="location">Lieu : {location}</div>
                    <div className="tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="right-container">
                <div className="host-info">
                    <div className="host-name">
                        <span className="first-name">{firstName}</span>
                        <br/>
                        <span className="last-name">{lastName}</span>
                    </div>
                    <img className="host-picture" src={picture} alt={`Hébergé par ${name}`}/>
                </div>
                <div className="host-rating">
                    <div className="rating">Note : {rating} étoiles</div>
                </div>
            </div>
        </section>
    );
}

export default HostInfo;







