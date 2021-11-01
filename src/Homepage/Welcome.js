import React from "react";
import "./Welcome.css";
import WelcomeCard from "./WelcomeCard";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const Welcome = () => {
  return (
    <div className="welcome-div">
      <div className="welcome">
        <div className="welcome-fl">
          <h3>Welcome</h3>
          <p>
            Organizations and individuals are seeking fast, safe, easy, and
            cheap means of payment, eNaira was minted to meet these pressing
            needs.
          </p>
        </div>
        <div className="welcome-f2">
          <p>
            eNaira is a Central Bank of Nigeria-issued digital currency that
            provides a unique form of money denominated in Naira. eNaira serves
            as both a medium of exchange and a store of value, offering better
            payment prospects in retail transactions when compared to cash
            payments. eNaira has an exclusive operational structure that is both
            remarkable and nothing like other forms of central bank money.
          </p>
        </div>
        <div className="welcome-f2">
          <p>
            There are several benefits from a central bank-issued digital
            currency in Nigeria, and this cuts across different sectors of, and
            concerns of the economy.
          </p>
        </div>
        <div className="welcome-box">
          <div>
            <p>
              eNaira serves as both a medium of exchange and a store of value,
              offering better payment prospects in retail transactions when
              compared to cash payments.
            </p>
          </div>
        </div>
      </div>
      <ScrollAnimation animateIn="animate__fadeInUp">
        <WelcomeCard />
      </ScrollAnimation>
    </div>
  );
};

export default Welcome;
