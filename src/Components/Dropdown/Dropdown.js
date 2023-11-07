import React, { useState } from 'react';
import './Dropdown.scss';
import dropdownArrowUp from '../../assets/dropdownarrowclosed.svg';
import dropdownArrowDown from '../../assets/dropdownarrowopen.svg';

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}`}>
            <button className="dropdown-button" onClick={toggleDropdown}>
                {title}
                <img
                    className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
                    src={isOpen ? dropdownArrowDown : dropdownArrowUp}
                    alt={isOpen ? 'Fermer' : 'Ouvrir'}
                />
            </button>
            <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;

