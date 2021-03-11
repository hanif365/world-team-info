import React from 'react';
import './Contact.css'
import contactImg from '../../Assets/Images/contact.jpg'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="container contact-container py-5 my-5">
            <div className="row">
                <div className="col">
                    <div>
                        <h1>Contact will come very soon....</h1>
                        <img className="my-2" src={contactImg} alt="error-message" />
                        <h3>Please wait....Thank You.</h3>
                        <Link className="btn btn-danger" to="/home">Close</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;