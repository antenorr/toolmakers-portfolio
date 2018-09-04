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

        <div className="menu">
          <div className="logo">
            <h1>TABLE</h1>
          </div>
          <nav className="navigator">
            <ul>
              <li><Link exact to="/" className="navLinks">HOME</Link></li>
              <li><Link to="/portfolio" className="navLinks">PORTFOLIO</Link></li>
              <li><Link to="/contact" className="navLinks">CONTACT</Link></li>
            </ul>
          </nav>
        </div>

        <div className="content">
          <Route exact path="/" component={ Home } />
          <Route path="/portfolio" component={ Portfolio } />
          <Route path="/contact" component={ Contact } />

        </div>
      </div>
    );
  }
}

export default App;
