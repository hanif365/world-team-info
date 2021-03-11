import React from 'react';
import './Fixtures.css'
import fixtureImg from '../../Assets/Images/fixture.jpg'
import { Link } from 'react-router-dom';

const Fixtures = () => {
    return (
        <div className="container fixture-container py-5 my-5">
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Fixtures will come very soon....</h1>
                        <img className="my-2" src={fixtureImg} alt="error-message" />
                        <h3>Please wait....Thank You.</h3>
                        <Link className="btn btn-danger" to="/home">Close</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fixtures;