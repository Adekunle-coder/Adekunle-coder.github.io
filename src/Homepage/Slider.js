import React, { useContext, useState, useEffect } from "react";
import "./Slider.css";
import { Data } from "./Data";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import { EventContext } from "../EventContext";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const { NotaMenuclick } = useContext(EventContext);

  const moveImage = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {

      const newSlideIndex = slideIndex >= Data.length - 1 ? 0 : slideIndex + 1
        setSlideIndex(newSlideIndex);

    }, 3900);
    return () => {
      clearTimeout(timer);
    };
  }, [slideIndex]);

  return (
    <div>
      <div className="container">
        {/* <Modal /> */}
        <div className="slider-container">
          {Data.map((obj, index) => {
            return (
              <div
                key={obj.id}
                className="slider"
                style={{
                  marginLeft: index === 0 ? `-${slideIndex * 100}%` : undefined,
                }}
              >
                <div className="slider-cfd">
                  <p>{obj.para}</p>
                  <h2>{obj.heading}</h2>
                  <Link to="/DownloadPage">
                    <button onClick={NotaMenuclick}>Download App</button>
                  </Link>
                </div>
                <img alt="sv1" src={obj.image}></img>
              </div>
            );
          })}
        </div>
        <div className="square">
          {Array.from({ length: 5 }).map((obj, index) => {
            return (
              <div
                className={slideIndex === index ? "sq-one-active" : "sq-one"}
                key={index}
                onClick={() => moveImage(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
