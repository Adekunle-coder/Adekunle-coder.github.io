import React from "react";
import "./TabSection.css"

const TabSection = (props) => {
    const {title, subtitle, message} = props;
  return (
    <div>
      <div className="tab-container">
        <div className = "tabsection">
          <h4>{title}</h4>
          <h2>{subtitle}</h2>
          <p>
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
