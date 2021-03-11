import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const Home = () => {
    const [teams, setTeams] = useState([]);

    // Fetch API to load data and then it converted to JSON format
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setTeams(data.teams);
            })
    }, [])
    return (
        <div id="main-container">
            <div>
                <Navbar></Navbar>
                <Header></Header>

            </div>
            <div className="text-center py-5 team-list-style">
                <h1>TEAM LIST</h1>
                <hr />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {
                    teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;