import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'


const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTeams(data.teams);
            })
    }, [])
    return (
        <div>
            <div className="main-banner">
                <div>
                    <img src="https://www.thesportsdb.com/images/media/team/fanart/cal7fg1485707947.jpg" alt="main-banner" />
                </div>
                <div className="banner-text">
                    <h1 className="text-highlight">World Team Info</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, est.</p>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center py-5">
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Home;