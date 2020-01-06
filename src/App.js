/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


import React, { Component } from "react";
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './Nav'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

export default class App extends Component {
 
  state = {
    sideDrawerOpen: false // this is our intial state..
  };
  // FUNCTIONS

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  //events ares called and clicked/ child components are rendered by the APP component

 
 
 
  render() {
    return (
      <div>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="https://nasa.gov" target="_blank">
                <img src="/" alt="" />
              </a>
              <Link to="/" className="navbar-brand">
                Home
            </Link>
              <div className="collapse nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">
                      Projects
                  </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">
                      Contact
                  </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/:id" className="nav-link">
                      
                  </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Route exact path="/" component={Home} />
            <Route path="/edit/:id" component={Projects} />
            <Route path="/create" component={Contact} />
          </div>
        </Router>
        <Nav />
      </div>
    )
  }
}