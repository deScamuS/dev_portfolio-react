import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className='contact'>
      <main id="contact">
      <h1 class="lg-heading">
        Contact
        <span class="text-secondary">Me!</span>
      </h1>
      <h2 class="sm-heading">
      </h2>
      <div class="boxes">
        <div>
          <h3><span class="text-secondary">Email: </span></h3>
          <h3>desanmichael1@gmail.com</h3>
        </div>
        <div>
          <h3><span class="text-secondary">Phone: </span></h3>
          <h3>(310)650-3265</h3>
        </div>
        <div>
          <h3><span class="text-secondary">Address: </span></h3>
          <h3>401 N 2nd St Minneapolis, MN 55401</h3>
        </div>
      </div>
    </main>
    </div>
  );
};
export default Contact;
