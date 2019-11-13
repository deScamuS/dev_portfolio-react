import React, { Component } from "react";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <main>
        <React.Fragment>
        <div class="intro">Hello, I'm Michael</div>
          <div class="tagline">Engineer | Coder | Bleh</div>
          <div class="icons-social">
            <a href="https://github.com/">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://stackoverflow.com">
              <i class="fab fa-stack-overflow"></i>
            </a>
            <a href="https://www.linkedin.com">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://facebook.com">
              <i class="fab fa-facebook"></i>
            </a>
          </div>
        </React.Fragment>
      </main>
    );
  }
}
export default Home;
