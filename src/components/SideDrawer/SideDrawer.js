/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./sideDrawer.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Home from '../pages/Home'

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <Router>
      <nav className={drawerClasses}>
        <ul>
          <li classname="link">
            <a href="/">Home</a>
          </li>
          <li classname="link">
            <a href="/about">About</a>
          </li>
          <li classname="link">
            <a href="/projects">Projects</a>
          </li>
          <li classname="link">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </nav>
    </Router>
  );
};

export default SideDrawer;
