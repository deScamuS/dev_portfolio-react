/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import "./about.css";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 4),
    color: "rgb(31, 121, 173)"
    
  }
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className='about'>
      <Paper className={classes.root} elevation={5}>
        <div className="">
          <Container maxWidth="md">
            <Typography variant="h5" component="h3">
              <h1>About</h1>
            </Typography>
            <Typography variant="h6" component="h4">
              Hey, I'm Michael and I currenty reside in Minneapolis, MN. I've
              lived and worked in Peru, Nepal, Seattle, & LA. I developed a
              passion for tech, and have a vociferous appetite for developing my
              skill-sets and capabilities to positively contribute to teams in
              both a creative and technological manner. Thanks for taking the
              time to have a look!
            </Typography>
          </Container>
        </div>
      </Paper>
      <Typography>
        
      </Typography>
    </div>
  );
}
