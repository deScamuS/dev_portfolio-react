/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="intro">Hello, I'm Michael</div>
        <div className="tagline"> </div>
        <div className="icons-social">
          <a href="https://github.com/deScamuS/">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://www.linkedin.com">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}
export default Home;
