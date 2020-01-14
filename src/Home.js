/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { Component } from "react";
import Nav from "./Nav";
import Backdrop from "./Backdrop/Backdrop";
import "./app.css";

export default class Home extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <>
        <Nav />
        {backdrop}
        <div style={{ height: "100%", marginTop: "-64px" }}>
          <main className="Home" style={{ marginTop: "64px" }}>
            <br />
            <div
              style={{ fontFamily: "Alcubierre, sans serif" }}
              className="intro"
            >
              Hello, I'm Michael
            </div>
            <div className="tagline"> </div>
            <div className="icons-social">
              <a href="https://github.com/deScamuS/">
                <i className="fab fa-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/descamusmichael/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </main>
        </div>
      </>
    );
  }
}
