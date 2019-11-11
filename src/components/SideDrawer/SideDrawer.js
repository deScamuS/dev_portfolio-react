/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import {NavLink} from 'react-router-dom'
import "./SideDrawer.css";

const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
      <li className='nav-link'>
            <NavLink to='/'>About</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/projects'>Projects</NavLink>
          </li>
          <li className='nav-link'>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
