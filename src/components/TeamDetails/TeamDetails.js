import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFootballBall, faFutbol, faPodcast, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { useHistory, useParams } from 'react-router';
import './TeamDetails.css'
import maleTeam from '../../Assets/Images/male.png'
import femaleTeam from '../../Assets/Images/female.png'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const TeamDetails = () => {
    const { teamId } = useParams();

    const [teamDetails, setTeamDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                console.log(data.teams);
                // console.log(data.teams[0].strCountry);
                // console.log(data.teams[0].strTeam);
                setTeamDetails(data.teams[0]);
            })
    }, [])

    return (
        <div className="team-body">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="banner-container">
                <div className="">
                    <div className="">
                        {/* <img className="banner-img" src={teamDetails.strTeamFanart3} alt="team-banner" /> */}
                        <img className="banner-img" src={teamDetails.strTeamBanner} alt="team-banner" />
                    </div>
                </div>
                <div>
                    <img className="team-badge" src={teamDetails.strTeamBadge} alt="team-badge" />
                </div>
            </div>
            <div className="container my-5">
                <div className="card team-details">
                    <div className="row g-0">
                        <div className="col-md-5">
                            <div className="card-body">
                                <h1 className="card-title">{teamDetails.strTeam}</h1>
                                {/* <h5 className="card-text">{<img className="icon" src={founded} />} Founded : {teamDetails.intFormedYear}</h5> */}
                                <h5 className="card-text"><FontAwesomeIcon icon={faPodcast} /> Founded : {teamDetails.intFormedYear}</h5>
                                <h5 className="card-text"><FontAwesomeIcon icon={faFlag} /> Country : {teamDetails.strCountry}</h5>
                                <h5 className="card-text"><FontAwesomeIcon icon={faFutbol} /> Sport Type : {teamDetails.strSport}</h5>
                                <h5 className="card-text"><FontAwesomeIcon icon={faVenusMars} /> Gender : {teamDetails.strGender}</h5>
                            </div>
                        </div>
                        <div className="col-md-7 p-3">
                            {/* <img className="team-details-img" src="https://e0.365dm.com/20/03/2048x1152/skysports-arsenal-olympiakos_4944696.jpg" alt="team-image" /> */}
                            {/* <img className="team-details-img" src={maleTeam} alt="team-image" /> */}

                            {
                                teamDetails.strGender === "Male" || "male" ? <img className="team-details-img" src={maleTeam} alt="male-team-image" /> : <img className="team-details-img" src={femaleTeam} alt="female-team-image" />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 mb-5 description-container">
                <div className="row">
                    <div className="col">
                        <p className="mb-5">{teamDetails.strDescriptionEN}</p>
                        <p>{teamDetails.strStadiumDescription}</p>
                        <p>{teamDetails.strDescriptionFR}</p>
                        {/* <p>{teamDetails.strDescriptionES}</p>
                        <p>{teamDetails.strDescriptionDE}</p>
                        <p>{teamDetails.strDescriptionNO}</p>
                        <p>{teamDetails.strDescriptionIT}</p> */}
                    </div>
                </div>
            </div>
            <div className="container text-center pb-5">
                <div className="row">
                    <div className="col">
                        <a href={`https://${teamDetails.strTwitter}`} target="_blank" className="twitter"><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></a>
                        <a href={`https://${teamDetails.strFacebook}`} target="_blank" className="facebook mx-3"><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></a>
                        <a href={`https://${teamDetails.strYoutube}`} target="_blank" className="youtube"><FontAwesomeIcon icon={faYoutubeSquare} size="2x" /></a>
                        <a href={`https://${teamDetails.strInstagram}`} target="_blank" className="instagram ms-3"><FontAwesomeIcon icon={faInstagramSquare} size="2x" /></a>
                    </div>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default TeamDetails;