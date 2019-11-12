/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./sideDrawer.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <Router>
      <nav className={drawerClasses}>
        <ul>
          <li className='path-link'>
            <Link to='/'>About</Link>
          </li>
          <li className='path-link'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='path-link'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
};

export default SideDrawer;
