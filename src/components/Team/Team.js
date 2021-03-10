import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { Link, useHistory } from 'react-router-dom';

const Team = (props) => {
    console.log(props.team);
    // console.log(props.team.idTeam);
    const { strTeam, strTeamBadge, strSport, idTeam } = props.team;

    // use History
    const history = useHistory();

    const handleClick = (teamId) => {
        const url = `/team/${teamId}`;
        history.push(url);
    }

    return (
        <div className="">
            <div class="card team-card text-center m-4 p-3">
                {/* <img src="#" class="card-img-top" alt="..."> */}
                {/* <img src={require('/images/image-name.png')} /> */}
                <img className="team-card-img" src={strTeamBadge} alt="team-badge" />
                <div class="card-body">
                    <h1 className="card-title">{strTeam}</h1>
                    <h3>Sports type : {strSport}</h3>

                    {/* <Link to={`/team/${idTeam}`}>
                        <button className="btn btn-warning">Explore <b>{strTeam}</b> team <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link> */}
                    <button className="btn btn-danger" onClick={() => handleClick(idTeam)}>Explore <b>{strTeam}</b> team <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Team;