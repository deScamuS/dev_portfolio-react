import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div class="intro">Hello, I'm Michael</div>
        <div class="tagline"> </div>
        <div class="icons-social">
          <a href="https://github.com/deScamuS/">
            <i class="fab fa-github"></i>
          </a>

          <a href="https://www.linkedin.com">
            <i class="fab fa-linkedin"></i>
            </a>
          </div>
        
      </div>
    );
  }
}
export default Home;
