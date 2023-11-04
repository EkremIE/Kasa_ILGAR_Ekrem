import React, { useState } from 'react';
import './Dropdown.scss';

const Dropdown = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                {title}
            </button>
            <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
                {children}
            </div>
        </div>
    );
};

export default Dropdown;
