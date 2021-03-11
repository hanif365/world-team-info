import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faFutbol } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container navbar-container navbar-light">
            <nav class="navbar navbar-expand-lg fixed-top px-3">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><FontAwesomeIcon className="logo" icon={faFutbol} size="1.5x" /> <span className="navbar-text">WORLD TEAM INFO</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            <Link class="nav-link" to="/features">Features</Link>
                            <Link class="nav-link" to="/fixtures">Fixtures</Link>
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;