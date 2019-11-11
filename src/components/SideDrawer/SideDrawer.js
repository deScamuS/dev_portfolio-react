/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import "./sideDrawer.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;