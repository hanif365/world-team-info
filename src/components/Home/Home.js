import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css'
import banner1 from '../../Assets/Images/banner1.jpg'
import banner2 from '../../Assets/Images/banner2.jpg'
import banner3 from '../../Assets/Images/banner3.jpg'
import banner4 from '../../Assets/Images/banner4.jpg'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


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
            <div>
                <Navbar></Navbar>
                <Header></Header>
                
            </div>
            <div className="d-flex flex-wrap justify-content-center py-5">
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;