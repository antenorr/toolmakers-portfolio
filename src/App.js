import React, { Component } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { Route, Link } from 'react-router-dom'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="logo">
            <h2>LOGO HERE</h2>
          </div>
          <ul>
            <li><Link exact to="/">HOME</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div class="content">
          <Route exact path="/" component={ Home } />
          <Route path="/portfolio" component={ Portfolio } />
          <Route path="/contact" component={ Contact } />

        </div>
      </div>
    );
  }
}

export default App;
