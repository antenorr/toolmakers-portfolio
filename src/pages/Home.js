import React, { Component } from 'react';
import './home.css';


class Home extends Component {
    render () {
        return (
            <div>
                <div className="jumbotron">
                    <div className="jumbotron-offer">
                        <h1>A <span>SPECIAL BLEND</span> OF COOL</h1>
                        <p>Manhattan's boutique designer</p>
                        <a href="http://www.google.com" className="button">Learn More</a>
                    </div>
                </div> 
                <div className="section-divider">
                    <h5 className="offerfont-secdivide
                    divider-lead">THE CREATION STORY</h5>
                    <p className="offerfont-secdivide">Designing the perfect work or living space begins and ends <br /> with the perfect blend of energy and truth.</p>
                </div>
            </div>
        );
    }
}

export default Home;