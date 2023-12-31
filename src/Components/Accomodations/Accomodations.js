import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../logements.json';
import Carousel from '../Carrousel/Carousel';
import './Accomodations.scss';
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NotFound from "../../pages/NotFound";
import HostInfo from "../Hostinfo/HostInfo";

function Accommodation() { // Logements Fetch
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
            <Header showBackground={false} />
            <Carousel images={logement.pictures} />
            <div className='accommodation-section'>
            <div className="accommodation-details">
                <HostInfo
                    title={logement.title}
                    name={logement.host.name}
                    picture={logement.host.picture}
                    rating={logement.rating}
                    location={logement.location}
                    tags={logement.tags}
                />
            </div>
            <div className="accommodation-dropdowns">
                <div className="dropdown-container">
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
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}

export default Accommodation;



