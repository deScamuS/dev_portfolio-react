/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Toolbar = props => {
  return (
    <div>
      <Router>
        <header className='toolbar'>
          <nav className='toolbar__navigation'>
            <div className='toolbar__toggle-button'>
              <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className='toolbar__logo'>
              <a href='/'>THE LOGO</a>
            </div>
            <div className='spacer' />
            <div className='toolbar_navigation-items'>
              <ul>
                <li className='active_nav-link'>
                  <NavLink to='/'>About</NavLink>
                </li>
                <li className='nav-link'>
                  <NavLink to='/projects'>Projects</NavLink>
                </li>
                <li className='nav-link'>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </header>
      </Router>
    </div>
  );
};
export default Toolbar;
