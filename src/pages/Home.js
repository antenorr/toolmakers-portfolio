import React, { Component } from 'react';
import './home.css';
import { Link } from 'react-router-dom'

class Home extends Component {
    render () {
        return (
            <div>
                <div className="jumbotron">
                    <div className="jumbotron-offer">
                        <h1>Front End <br /><span>Full-Stack<br /></span>Web Developer</h1>
                        <p>"We are the Music Makers,<br /> and we are the dreamers of dreams"<br /> -W. Wonka</p>
                        <Link to="/portfolio" className="navLinks button" style={{ textDecoration: 'none' }}>PORTFOLIO</Link>
                    </div>
                </div> 
                <div className="section-divider">
                    <h5 className="offerfont-secdivide
                    divider-lead orange-text-plain">Roudy Antenor</h5>
                    <p className="offerfont-secdivide">I'm Roudy. I built my first website using Joomla and fell in love with web developement.<br />
                        I've developed a passion for programming over the last couple of years, by attending on-line and in-person training classes, hackathons, <br />
                        team-projects and programming books. When not programming I love to photograph cities, smiling people and nature.<br />
                        Welcome to my portfolio! 
                    </p>
                    <p className=" orange-text-plain right-align">This site was built with love learning React.js</p>
                </div>
            </div>
        );
    }
}

export default Home;

// Heroku home page:
// https://sheltered-crag-90684.herokuapp.com/portfolio

