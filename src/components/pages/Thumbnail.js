/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import "./thumbnail.css";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import logo from './img/stars.jpg'
import TabNation from './TabNation'

class Thumbnail extends Component {
  render(props) {
    return (
      <Container maxWidth="sm">
        <div className="thumbnails">
          <TabNation/>
          <div className id="work">
            <h1 className="lg-heading">
               <br />
              <span className="text-secondary">Projects</span>
              <p>Tempor adipisicing deserunt do mollit quis do laborum fugiat enim irure fugiat amet qui. Aute occaecat ipsum ut eiusmod culpa reprehenderit Lorem anim exercitation anim aliquip. Cupidatat eu nisi est sint irure cillum eu Lorem veniam deserunt consequat duis. Ad est ex ex irure laboris non adipisicing. Veniam dolore magna officia mollit ea.</p>
            </h1>
            <h2 className="sm-heading"> </h2>
            <div className="projects">
              <TabNation/>
              <div className="item">
                <a href="https://descamus.github.io/nasa-api_react/">
                  <img src={logo} alt="project" />
                </a>
                <a
                  href="https://github.com/deScamuS/nasa-api_react"
                  className="btn-light"
                >
                  <i class="fas fa-eye"></i>CODE
                </a>
                <a href="https://github.com/deScamuS/" className="btn-dark"></a>
              </div>
              <div className="item">
                <a href="https://descamus.github.io/my_portfolio/">
                  <img src="img/portfolioimg.jpg" alt="project" />
                </a>
                <a
                  href="https://github.com/deScamuS/my_portfolio"
                  class="btn-light"
                >
                  <i className="fas fa-eye"></i>Project
                </a>
                <a href="https://github.com/deScamuS/" className="btn-dark"></a>
              </div>
            </div>
          </div>
          </div>
      </Container>
    );
  }
}
export default Thumbnail;
