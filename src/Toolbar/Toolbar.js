/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from 'react-router-dom'
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./toolbar.css";


const Toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <img src="/" alt="" />
        </div>
        <div className="spacer" />

        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Toolbar;
