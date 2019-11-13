/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Thumbnail from "./Thumbnail";
import "./projects.css";
import { motion } from "framer-motion";
import Container from "@material-ui/core/Container";
import logo from "../img/logo192.png";

const Projects = () => {
  return (
    <Container max-width="med">
      <Thumbnail
        link="/twitter"
        image="../img/drowning.jpg"
        title="Airbnb Experiences"
        category="Website"
      />
      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Airbnb Experiences"
        category="Website"
      />
      <Thumbnail
        link="/twitter"
        image="http://twitter-image-url.jpg"
        title="Airbnb Experiences"
        category="Website"
      />
    </Container>
  );
};

export default Projects;
