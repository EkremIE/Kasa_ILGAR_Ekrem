import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../logements.json';
import Carousel from '../Carrousel/Carrousel';
import './Accomodations.scss';
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../../pages/NotFound";
import HostInfo from "../Hostinfo/HostInfo";

function Accommodation() {
    const [logement, setLogement] = useState(null);
    const { id } = useParams(); // Récupérez l'ID de l'URL

    useEffect(() => {
        // Trouvez le logement correspondant dans jsonData
        const foundLogement = jsonData.find((item) => item.id === id);
        setLogement(foundLogement);
    }, [id]);

    if (!logement) {
        return <NotFound />;
    }

    return (
        <div className="accommodation">
            <Header />
            <Carousel images={logement.pictures} />
            <div className="accommodation-details">
                <h2 className="accommodation-title">{logement.title}</h2>
                <HostInfo
                    name={logement.host.name}
                    picture={logement.host.picture}
                    rating={logement.rating}
                    location={logement.location}
                    tags={logement.tags}
                />
            </div>
            <Dropdown title="Description">
                <p>{logement.description}</p>
            </Dropdown>
            <Dropdown title="Équipements">
                <ul>
                    {logement.equipments.map((equipment, index) => (
                        <li key={index}>{equipment}</li>
                    ))}
                </ul>
            </Dropdown>
            <Footer />
        </div>
    );
}

export default Accommodation;


