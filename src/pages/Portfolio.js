import React, { Component } from 'react';
import './portfolio.css';


class Portfolio extends Component {

  handleLink = () => {
    window.open("s", "_blank")
    console.log("Hello");
  }
  render() {
    return (


      <div className="masterDiv">

        <div className="section-divider top-divider">
            <h5 className="offerfont-secdivide
            divider-lead">Responsive HTML5 | CSS3 | Javascript</h5>
            <p className="offerfont-secdivide">Directly below represents various project completed employing Vanilla CSS and Semantic HTML.<br />
                Pressing the photo will alow you to view the project in modal mode<br />
                while the explore button will allow you to see the application live<br />
            </p>
        </div>


        <div className="center-fold">
          <div className="roll roll1" ></div>
          <div className="roll scrip">
            <div className="fold-text">
              <h3>Happy Log-in</h3>
              <p>A simple client login-in splash page built entirely in HTML and CSS.<br /> <span>  The Challenge :</span><br />Create a welcoming and gentle login page to convey the feeling of playfulness and fun.</p>
              <a href="https://antenorr.github.io/happy_login/" rel="noopener noreferrer" target="_blank"  >Explore</a>
              <a href="https://github.com/antenorr/happy_login" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
          <div className="roll roll2" ></div>
          <div className="roll scrip border-atop">
            <div className="fold-text">
              <h3>Life's a Beach</h3>
              <p>Inspired by Cond&egrave;  Naste's promotion for exotic carribean resorts, this splash page was build in HTML & CSS<br /><span>  The Challenge :</span><br />Create a company splash page the would entice the visitor and provoke feelings of freedom and entitlement.</p>
              <a href="https://antenorr.github.io/nirvana_splash/" rel="noopener noreferrer" target="_blank">Explore</a>
              <a href="https://github.com/antenorr/nirvana_splash" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
          <div className="roll roll3" ></div>
          <div className="roll scrip border-atop">
            <div className="fold-text">
              <h3>Get Your Study On</h3>
              <p>A simple client login-in splash page built entirely in HTML and CSS.<br /> <span>  The Challenge :</span><br />Create a welcoming and gentle login page to convey the feeling of playfulness and fun.</p>
              <a href="https://antenorr.github.io/project-colmar/" rel="noopener noreferrer" target="_blank">Explore</a>
              <a href="https://github.com/antenorr/project-colmar" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
        </div>




                <div className="section-divider">
                    <h5 className="offerfont-secdivide
                    divider-lead">NODE | FireBase | Google Materialize | Javascript</h5>
                    <p className="offerfont-secdivide">I'm Roudy. A 'self taught' developer and IOT enthusiast.<br />
                        I have an uncanny ability for finding the right tool to solve acute problems,<br />
                        and love building the right tool when one cannot be found.<br />
                        Welcome to my portfolio! 
                    </p>
                </div>



        <div className="center-fold">
          <div className="roll roll4" ></div>
          <div className="roll scrip">
            <div className="fold-text">
              <h3>Client Organizer</h3>
              <p>We value the beauty that streams from a ray of sunshine or the luster from the wings of lady bug.  Inspiration is all surrounds us, in countless shapes, forms and sizes.  Delivering the unimaginaeble lies at the heart of our service.</p>
              <a href="https://antenorr.github.io/new_client_organizer/" rel="noopener noreferrer" target="_blank" className="more-butt">Explore</a>
              <a href="https://github.com/antenorr/new_client_organizer" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
          <div className="roll roll5" ></div>
          <div className="roll scrip border-atop">
            <div className="fold-text">
              <h3>Dinner for Two?</h3>
              <p>The winds of change are all about us in every moment.  Breathing life into every project keeps us afloat and forever young.  Keeping ahead of the trends by setting them ensures that our flair for the beautiful is on of kind.</p>
              <a href="https://antenorr.github.io/vanilla_js_rsvp/" rel="noopener noreferrer" target="_blank">Explore</a>
              <a href="https://github.com/antenorr/vanilla_js_rsvp" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
          <div className="roll roll6" ></div>
          <div className="roll scrip border-atop">
            <div className="fold-text">
              <h3>A Fresh Start</h3>
              <p>Clliches are for the timid.  Laws were meant to be broken,   Value in individuality is our flame.  Our unique designing process takes the spirit of our clients and and brings them to life. </p>
              <a href="https://pharagladden.com/" rel="noopener noreferrer" target="_blank">Explore</a>
              <a  rel="noopener noreferrer" target="_blank" className="code_button" >A Wordpress Design</a>
            </div>
          </div>
        </div>




      </div>
    );
  }
}

export default Portfolio;
