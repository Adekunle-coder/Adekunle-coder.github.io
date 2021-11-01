import React from "react";
import "./News.css";

const News = () => {
  return (
    <div>
      <div className="news-minic">
        <div className="news-head">
          <h3>eNaira News</h3>
          <div className="ntb">
            <button>More News & Events</button>
          </div>
        </div>
        <div className="news-section">
          <div className="news-div">
            <img alt="newdivv" src="./Images/australia.jpg"></img>
            <div className="news-div-ct">
              <h2>
                Australia, Malaysia, Singapore and South Africa launch cenbank
                digital currency scheme
              </h2>
              <hr></hr>
              <p>
                source: <span>reuters.com</span>
              </p>
              <h4>Around the World</h4>
              <span className="news-exit">
                <i className="fas fa-arrow-up"></i>
                <p>Read More</p>
              </span>
            </div>
            <div className="opac"></div>
          </div>
          <div className="news-div">
            <img alt="newdivv" src="./Images/Cttee meeting.jpeg"></img>
            <div className="news-div-ct">
              <h2>
                Committee's Meeting
              </h2>
              <hr></hr>
              <p>
                Sat, 18th Sept., 2021
              </p>
              <h4>Gallery</h4>
              <span className="news-exit">
                <i className="fas fa-arrow-up"></i>
                <p>View</p>
              </span>
            </div>
            <div className="opac"></div>
          </div>
          <div className="news-div">
            <img alt="newdivv" src="./Images/local.jpeg"></img>
            <div className="news-div-ct">
              <h2>
                Local and International Trade: How The eNara Can Cause Positive Shifts
              </h2>
              <hr></hr>
              <p>
                By: Olugbenga Fakorede Arenola
              </p>
              <h4>Insights</h4>
              <span className="news-exit">
                <i className="fas fa-arrow-up"></i>
                <p>Read More</p>
              </span>
            </div>
            <div className="opac"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
