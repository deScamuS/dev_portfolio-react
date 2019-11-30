/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./about.css";
import Container from "@material-ui/core/Container";




const About = () => {
  return (
    <div className="about">
      <Container maxWidth="md">  
        <div className="image"></div>

        <div>
          <h1>About</h1>
          <p className='p'>
            Hey, I'm Michael and I currenty reside in Minneapolis, MN. I've
            lived and worked in Peru, Nepal, Seattle, & LA. I developed a
            passion for tech, and have a vociferous appetite for developing my
            skill-sets and capabilities to positively contribute to teams in
            both a creative and technological manner. Thanks for taking the time
            to have a look!
          </p>
        </div>
      </Container>
    </div>
  );
};
export default About;
