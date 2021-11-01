import React from "react";
import "./Modal.css";

const Modal = () => {
  return (
    <div>
      <div className="modal-container">
        <div className="modal">
          <h4>eNaira is Finally Here</h4>
          <h2>
            Get Ready With Your Accurate BVN Data For Your Hitch-Free Enrolment
          </h2>
          <p>
            To sign-up on the eNaira speed wallet, you would be required to
            input the following details exactly as captured during your BVN
            enrollment.
            <strong>
              First Name, Last Name, Date of Birth, State of Origin, and Email
            </strong>
            Your Banks are waiting to assist you in validating and updating your
            BVN details to ensure seamless enrolment to the eNaira Platform.
          </p>

          <span>
            NB: Remember Your BVN details is YOUR Personal Information, Do not
            disclose to Anyone.
          </span>

          <button className="modal-btn">Read More</button>

          <div className="exit-modal">
            X
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
