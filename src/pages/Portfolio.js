import React, { Component } from 'react';
import './portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div>

        <div class="center-fold">
          <div class="roll roll1" ></div>
          <div class="roll scrip">
            <div class="fold-text">
              <h3>Engage Inspiration</h3>
              <p>We value the beauty that streams from a ray of sunshine or the luster from the wings of lady bug.  Inspiration is all surrounds us, in countless shapes, forms and sizes.  Delivering the unimaginaeble lies at the heart of our service.</p>
              <a href="http://www.google.com" class="more-butt">Be More</a>
            </div>
          </div>
          <div class="roll roll2" ></div>

          <div class="roll scrip border-atop">
            <div class="fold-text">
              <h3>Breathe Process</h3>
              <p>The winds of change are all about us in every moment.  Breathing life into every project keeps us afloat and forever young.  Keeping ahead of the trends by setting them ensures that our flair for the beautiful is on of kind.</p>
              <a href="http://www.google.com">Be More</a>
            </div>
          </div>
          <div class="roll roll3" ></div>
          <div class="roll scrip border-atop">
            <div class="fold-text">
              <h3>Break Rules</h3>
              <p>Clliches are for the timid.  Laws were meant to be broken,   Value in individuality is our flame.  Our unique designing process takes the spirit of our clients and and brings them to life. </p>
              <a href="http://www.google.com">Be More</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Portfolio;
