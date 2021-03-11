import React from 'react';
import './Features.css'
import featureImg from '../../Assets/Images/feature.jpg'
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className="container feature-container py-5 my-5">
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Features will come very soon....</h1>
                        <img className="my-2" src={featureImg} alt="error-message" />
                        <h3>Please wait....Thank You.</h3>
                        <Link className="btn btn-danger" to="/home">Close</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;