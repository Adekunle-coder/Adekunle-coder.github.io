import React from "react";
import "./VideoSection.css"


const VideoSection = () => {
  return (
    <div>
      <div className = "video-cont">
        <div className = "video-message">
          <h1>Same Naira. More Possibilities.</h1>
          <p>
            The eNaira is the Nigerian digital currency that is issued and
            regulated by the Central Bank of Nigeria. Its functionality delivers
            speedy, safe, and simple trading and transactional opportunities to
            customers and end-users:
          </p>
          <ul>
              <li>It is exchanged peer to peer.</li>
              <li>It is universal – anybody can hold it.</li>
              <li>It does not yield any interest.</li>
          </ul>

        </div>
        <div className = "video-islf">
            <video autoPlay muted loop > 
                <source type = "video/mp4" src = "./Videos/preview.mp4"></source>
            </video>
            <div className = "video-play">
            <i className="fas fa-play"></i>
            </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
