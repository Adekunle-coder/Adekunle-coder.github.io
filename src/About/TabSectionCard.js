import React from "react";
import "./TabSectionCard.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const TabSectionCard = (props) => {
  return (
    <div>
      <div className="tsc-container">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div className="tsc-card">
            <div className="tsc-img-div">
              <img alt="tscim" src={props.image}></img>
            </div>
            <div className="tsc-content">
              <h3>{props.text}</h3>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default TabSectionCard;
