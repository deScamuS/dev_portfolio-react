/* eslint-disable no-unused-vars */
import React from "react";
import './about.css';
import Container from "@material-ui/core/Container";

const About = () => {
  return (
    <div className="about">
      <Container style={{ background: "#f4f4f4" }}>
        <div>
          <h1>About</h1>
          <h5>
            Hey, I'm Mike and I currenty reside in Minneapolis, MN. I've lived and worked in
            Peru, Nepal, Seattle, & LA. I developed a passion for tech, and have
            a vociferous appetite for developing my skill-sets and capabilities
            to positively contribute to teams in both a creative and
            technological manner.  Thanks for taking the time to have a look!
          </h5>
          <div className="image">
           
          </div>
        </div>
      </Container>
    </div>
  );
};
export default About;
