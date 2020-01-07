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
  // FUNCTIONS b

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
                    <Link to="/projects" className="nav-link">
                      Contact
                  </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/contact" className="nav-link">
                      
                  </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Route  exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route path={process.env.PUBLIC_URL + "/projects"} component={Projects} />
            <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
          </div>
        </Router>
        <Nav />
      </div>
    )
  }
}