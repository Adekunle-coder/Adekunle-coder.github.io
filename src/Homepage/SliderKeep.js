import React, { useState } from "react";
import "./Slider.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const moveImage = (index) => {
    setSlideIndex(index);
    console.log(index);
  };

  return (
    <div>
      <div className="container">
        <div className="slider-container">
          <div className={slideIndex === 1 ? "slider" : "slider slider-move"}>
            <div className="slider-cfd">
              <p>Same Naira. More Possibilities</p>
              <h2>Easier Financial transactions</h2>
              <button>Download App</button>
            </div>
            <img alt="sv1" src="./Images/image.webp"></img>
          </div>
          <div className={slideIndex === 2 ? "slider slider-move" : "slider"}>
            <div className="slider-cfd">
              <p>Same Naira. More Possibilities</p>
              <h2>Safe, more secure transactions</h2>
              <button>Download App</button>
            </div>
            <img alt="sv1" src="./Images/image (2).webp"></img>
          </div>
          <div className={slideIndex === 3 ? "slider slider-move" : "slider"}>
            <div className="slider-cfd">
              <p>Same Naira. More Possibilities</p>
              <h2>100% local, 100% global</h2>
              <button>Download App</button>
            </div>
            <img alt="sv1" src="./Images/image (4).webp"></img>
          </div>
          <div className={slideIndex === 4 ? "slider slider-move" : "slider"}>
            <div className="slider-cfd">
              <p>Same Naira. More Possibilities</p>
              <h2>Easy transactions, anytime, anywhere.</h2>
              <button>Download App</button>
            </div>
            <img alt="sv1" src="./Images/image (5).webp"></img>
          </div>
          <div className={slideIndex === 3 ? "slider slider-move" : "slider"}>
            <div className="slider-cfd">
              <p>Same Naira. More Possibilities</p>
              <h2>Intricately designed to meet your needs.</h2>
              <button>Download App</button>
            </div>
            <img alt="sv1" src="./Images/image (1).webp"></img>
          </div>
        </div>
        <div className="square">
          <div className="sq-one-active" onClick={() => moveImage(1)}></div>
          <div className="sq-one" onClick={() => moveImage(2)}></div>
          <div className="sq-one" onClick={() => moveImage(3)}></div>
          <div className="sq-one" onClick={() => moveImage(4)}></div>
          <div className="sq-one" onClick={() => moveImage(5)}></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
