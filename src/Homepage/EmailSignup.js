import React from "react";
import "./EmailSignup.css";

const EmailSignup = () => {
  return (
    <div className="signup">
      <div className="signup-div">
        <input placeholder="Interested in receiving content from us? Insert your email address..."></input>
        <hr></hr>
        <button>Let's Go!</button>
      </div>
    </div>
  );
};

export default EmailSignup;
