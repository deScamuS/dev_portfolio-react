import React from "react";
import "./contact.css";
import Nav from '../Nav'
const Contact = () => {
  return (
    <>
      <Nav/>
    <div className="container" style={{backgroundColor: "pink"}}>
      <div className="contact">
        <main id="contact">
          <h1 className="lg-heading">
            Contact
            <span className="text-secondary">Me!</span>
          </h1>
          <div className="sm-heading"></div>
          <div className="boxes">
            <div>
              <h3>
                <span className="text-secondary">Email: </span>
              </h3>
              <h3>desanmichael1@gmail.com</h3>
            </div>
            <div>
              <h3>
                <span className="text-secondary">Phone: </span>
              </h3>
              <h3>(310)650-3265</h3>
            </div>
            <div>
              <h3>
                <span className="text-secondary">Address: </span>
              </h3>
              <h3>401 N 2nd St Minneapolis, MN 55401</h3>
            </div>
          </div>
        </main>
      </div>
      </div>
      </>
  );
};
export default Contact;
