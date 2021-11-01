import React, { useState } from "react";
import "./FAQmenu.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const FAQmenu = () => {
  const [rev1, setRev1] = useState(false);
  const [rev2, setRev2] = useState(false);
  const [rev3, setRev3] = useState(false);

  const showRev1 = () => {
    if (!rev1) {
      setRev1(true);
      setRev2(false);
      setRev3(false);
    } else {
      setRev1(false);
    }
  };
  const showRev2 = () => {
    if (!rev2) {
      setRev2(true);
      setRev3(false);
      setRev1(false);
    } else {
      setRev2(false);
    }
  };
  const showRev3 = () => {
    if (!rev3) {
      setRev3(true);
      setRev1(false);
      setRev2(false);
    } else {
      setRev3(false);
    }
  };
  return (
    <div>
      <div className="faqmenu-container">
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div className="faqmenu-div">
            <div className="faqmenu" onClick={showRev1}>
              <h3>
                How does a customer identify stores/shops and outlets that
                accept eNiara
              </h3>
              <i
                className={rev1 ? "fas fa-chevron-up" : "fas fa-chevron-down"}
              ></i>
            </div>
            <div className="faqmenu-answer">
              <div className={rev1 ? "faqshow" : "fanswer"}>
                <p>
                  While efforts will be made to put signages and decals at
                  designated merchant locations, customers can simply ask the
                  merchants if they accept eNaira.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div className="faqmenu-div-next">
            <div className="faqmenu" onClick={showRev2}>
              <h3>Can I pay with my eNaira and cash at the same time?</h3>
              <i
                className={rev2 ? "fas fa-chevron-up" : "fas fa-chevron-down"}
              ></i>
            </div>
            <div className="faqmenu-answer">
              <div className={rev2 ? "faqshow" : "fanswer"}>
                <p>
                  Yes. The eNaira and Cash are all variants of the legal tender.
                  Either or both can be used to carry out transactions as the
                  situation demands.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="animate__fadeInUp">
          <div className="faqmenu-div-next">
            <div className="faqmenu" onClick={showRev3}>
              <h3>
                Can I pay cash into any bank and instruct them to pay the funds
                into my wallet?
              </h3>
              <i
                className={rev3 ? "fas fa-chevron-up" : "fas fa-chevron-down"}
              ></i>
            </div>
            <div className="faqmenu-answer">
              <div className={rev3 ? "faqshow" : "fanswer"}>
                <p>
                  No. In order to move cash into your eNaira wallet, kindly go
                  to your bank.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default FAQmenu;
