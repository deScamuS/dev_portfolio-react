/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component


function Thumbnail(props) {
  return (
    <div className="project">
      <Link to= {props.link}>
        <div className="project-image">
          <img src={props.logo} alt='Project Image'/>
        </div>
        <div className="project-title">"{props.title}"</div>
        <div className="project-category">"{props.category}"</div>
      </Link>
    </div>
  );
}
 
export default Thumbnail;
