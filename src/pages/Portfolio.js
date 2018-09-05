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
            <p className="offerfont-secdivide">Directly below represents various projects completed employing HTML, CSS & Javascript.<br />
                Press the respective buttons to view the project live or view the source code.<br />
               
            </p>
        </div>


        <div className="center-fold">
          <div className="roll roll1" ></div>
          <div className="roll scrip">
            <div className="fold-text">
              <h3>Happy Log-in</h3>
              <p>A login-in form built entirely in HTML and CSS.<br /> <span className="orange-text">The Challenge:</span><br />Create a welcoming login page conveying feelings of playfulness and fun.</p>
              <a href="https://antenorr.github.io/happy_login/" rel="noopener noreferrer" target="_blank"  >Explore</a>
              <a href="https://github.com/antenorr/happy_login" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
          <div className="roll roll2" ></div>
          <div className="roll scrip border-atop">
            <div className="fold-text">
              <h3>Life's a Beach</h3>
              <p>Inspired by Cond&egrave;  Naste, this splash page was built in HTML & CSS<br /><span className="orange-text">The Challenge:</span><br />Create a company splash page  using fonts photos and copy that would entice the visitor enought to click for more.</p>
              <a href="https://antenorr.github.io/nirvana_splash/" rel="noopener noreferrer" target="_blank">Explore</a>
              <a href="https://github.com/antenorr/nirvana_splash" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
          <div className="roll roll3" ></div>
          <div className="roll scrip border-atop">
            <div className="fold-text">
              <h3>Get Your Study On</h3>
              <p>Geared towards college students, this site was built using HTMLS & CSS.<br /> <span className="orange-text">The Challenge:</span><br />Create a fully responsive UI that would allow students the freedom to explore different options that a typical school may offer.</p>
              <a href="https://antenorr.github.io/project-colmar/" rel="noopener noreferrer" target="_blank">Explore</a>
              <a href="https://github.com/antenorr/project-colmar" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
        </div>

                <div className="section-divider section2">
                    <h5 className="offerfont-secdivide
                    divider-lead">NODE | FireBase | Google Materialize | Javascript</h5>
                    <p className="offerfont-secdivide">Below are application that emphazize logic and perstance of data.<br />
                        More applications will follow as i delve deeper into React application  and server-side programming<br />
                    </p>
                </div>

        <div className="center-fold">
          <div className="roll roll4" ></div>
          <div className="roll scrip">
            <div className="fold-text">
              <h3>Client Organizer</h3>
              <p>A client organizer application built with Google's Materialize library, Javascript & Firebase<br /> <span className="orange-text">The Challenge:</span><br />Create a clean responsive interface using a lightweight library, and persisting data with FireBase </p>              
              <a href="https://antenorr.github.io/new_client_organizer/" rel="noopener noreferrer" target="_blank" className="more-butt">Explore</a>
              <a href="https://github.com/antenorr/new_client_organizer" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
          <div className="roll roll5" ></div>
          <div className="roll scrip border-atop">
            <div className="fold-text">
              <h3>Dinner for Two?</h3>
              <p>The quintessential RSVP application built with Javascript<br /> <span className="orange-text">The Challenge:</span><br />re-create an RSVP application while documenting the purpose behind every command (Great Learning experience).</p>             
               <a href="https://antenorr.github.io/vanilla_js_rsvp/" rel="noopener noreferrer" target="_blank">Explore</a>
              <a href="https://github.com/antenorr/vanilla_js_rsvp" rel="noopener noreferrer" target="_blank" className="code_button" >Code</a>
            </div>
          </div>
          <div className="roll roll6" ></div>
          <div className="roll scrip border-atop">
            <div className="fold-text">
              <h3>A Fresh Start</h3>
              <p>This website was designed in Wordpress employing a CMS builder <br /> <span className="orange-text">The Challenge:</span><br />Create a fully functioning site offering information to visitors and the opportunity to send messages.</p>              
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
