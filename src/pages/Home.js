import React, { Component } from 'react';
import './home.css';


class Home extends Component {
    render () {
        return (
            <div>
                <div className="jumbotron">
                    <div className="jumbotron-offer">
                        <h1>Front End <br /><span>Full-Stack<br /></span>Web Developer</h1>
                        <p>"We are the Music Makers,<br /> and we are the dreamers of dreams"<br /> -W. Wonka</p>
                        <a href="http://www.google.com" className="button">Learn More</a>
                    </div>
                </div> 
                <div className="section-divider">
                    <h5 className="offerfont-secdivide
                    divider-lead">Roudy "The ToolMaker" Antenor</h5>
                    <p className="offerfont-secdivide">I'm Roudy. A 'self taught' developer and IOT enthusiast.<br />
                        I have an uncanny ability for finding the right tool to solve acute problems,<br />
                        and love building the right tool when one cannot be found.<br />
                        Welcome to my portfolio! </p>
                </div>
            </div>
        );
    }
}

export default Home;