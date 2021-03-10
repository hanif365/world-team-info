import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faFutbol } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container navbar-container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top px-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><FontAwesomeIcon icon={faFutbol} size="2x"/> <span className="navbar-text">WORLD TEAM INFO</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Pricing</a>
                            <a class="nav-link" href="#">Disabled</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;