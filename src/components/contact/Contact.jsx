import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let’s work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <p>smtangural@gmail.com</p>
        </div>
        <div className="item">
          <h2>Address</h2>
          <p>Jammu,Jammu and Kashmir</p>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <p>+91 6005775645</p>
        </div>
      </div>

      <div className="formContainer">
        <form>
          <input type="text" placeholder="Name" name="name" />
          <input type="email" placeholder="Email" name="email" />
          <textarea
            rows={8}
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
