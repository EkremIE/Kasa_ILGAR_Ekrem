import React from 'react';
import Dropdown from "../Components/Dropdown/Dropdown";
import Header from "../Components/Header/Header";
import backgroundImg2 from "../assets/Background2.jpeg";
import './About.scss';
import Footer from "../Components/Footer/Footer";

const AboutPage = () => {
    return (
        <>
            <Header showBackground={false} />
            <div className="about-page">
                <div className="box">
                    <div className="background">
                        <img src={backgroundImg2} alt="Arrière-plan" className="background-image" />
                    </div>
                </div>


                <Dropdown title="Fiabilité">
                    <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                </Dropdown>

                <Dropdown title="Respect">
                    <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Dropdown>

                <Dropdown title="Service">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </Dropdown>

                <Dropdown title="Sécurité">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En la matière, aucune tolérance ne sera acceptée.</p>
                </Dropdown>
                <Footer/>
            </div>
        </>
    );
}

export default AboutPage;

