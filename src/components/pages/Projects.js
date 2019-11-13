/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./projects.css";
import Container from "@material-ui/core/Container";
import Thumbnail from './Thumbnail'
const Projects = props => {
  return (
    <Container max-width="lg">
      <Thumbnail 
        image="./img/stars.jpg"
        Link to="https://descamus.github.io/nasa-api_react/"
        name="Nasa API "/>

      
      </Container>
  );
};

export default Projects;
