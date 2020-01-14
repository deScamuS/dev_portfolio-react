/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from './Toolbar/Toolbar'
import Backdrop from './Backdrop/Backdrop'
import SideDrawer from './SideDrawer/SideDrawer'



class Nav extends Component {
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
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: "64px" }}></main>
      </div>
    );
  }
}

export default Nav;
