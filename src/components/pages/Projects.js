/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import "./projects.css";
import logo from "../img/nasa.png";
import image from "../img/jscalc.jpeg";
import image2 from "../img/weather.jpg";
import image3 from "../img/booklist.jpg";

import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button
} from "react-mdl";

export default class Projects extends Component {
  constructor(props) {
    super();
    this.state = {
      activeTab: 0
    };
  }
  handleChange = tabId => {
    this.setState({ activeTab: tabId });
  };

  //TOGGLE FUNCTION FOR TABS DISPLAYING CARDS

  toggleContent = () => {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
          <a href="https://descamus.github.io/nasa-api_react">
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage:
                  "linear-gradient(60deg, #29323c 0%, #485563 100%)"
              }}
            >
              <img src={logo} alt="none" />
            </CardTitle>
          </a>
          <CardText style={{ fontSize: "1.5rem" }}>
            {""}
            Picture of the Day
          </CardText>
          <CardActions border>
            <Button colored>
              <a href="https://github.com/deScamuS/nasa-api_react">code</a>
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
          <a href="https://descamus.github.io/Calculator_Javascript/">
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage:
                  "linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)"
              }}
            >
              <img src={image} alt="error" />
            </CardTitle>
          </a>
          <CardText style={{ fontSize: "1.5rem" }}>Calculator</CardText>
          <CardActions border>
            <Button colored>
              <a href="https://github.com/deScamuS/Calculator_Javascript">
                code
              </a>
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
          <a href="https://descamus.github.io/weather-application_react/">
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage:
                  "linear-gradient(45deg, #874da2 0%, #c43a30 100%)"
              }}
            >
              <img src={image2} alt="error" />
            </CardTitle>
          </a>
          <CardText style={{ fontSize: "1.3rem" }}>Another WeatherApp</CardText>
          <CardActions border>
            <Button onClick={this.handleClick} colored>
              <a href="https://descamus.github.io/weather-application_react/">
                code
              </a>
            </Button>
          </CardActions>
        </Card>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <Card shadow={6} style={{ minWidth: "450", margin: "auto" }}>
          <a href="https://descamus.github.io/booklist_App/">
            <CardTitle
              style={{
                color: "#fff",
                height: "300px",
                backgroundImage:
                  "linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)"
              }}
            >
              <img src={image3} alt="error" />
            </CardTitle>
          </a>
          <CardText style={{ fontSize: "1.5rem" }}>Booklist</CardText>
          <CardActions border>
            <Button colored>
              <a href="https://github.com/deScamuS/booklist_App">code</a>
            </Button>
          </CardActions>
        </Card>
      );
    }
  };

  render() {
    return (
      <div className="project-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={this.handleChange}>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
          <Tab>React</Tab>
          <Tab>Javascript</Tab>
        </Tabs>
        <Grid className="projects">
          <Cell col={12}>
            <div className="content">{this.toggleContent()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
