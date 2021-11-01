import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [footdown1, setFootDown1] = useState(false);
  const [footdown2, setFootDown2] = useState(false);
  const [footdown3, setFootDown3] = useState(false);
  const [footdown4, setFootDown4] = useState(false);

  const showFootDown1 = () => {
    if (!footdown1) {
      setFootDown1(true);
      setFootDown2(false);
      setFootDown3(false);
      setFootDown4(false);
    } else {
      setFootDown1(false);
    }
  };
  const showFootDown2 = () => {
    if (!footdown2) {
      setFootDown1(false);
      setFootDown2(true);
      setFootDown3(false);
      setFootDown4(false);
    } else {
      setFootDown2(false);
    }
  };
  const showFootDown3 = () => {
    if (!footdown3) {
      setFootDown1(false);
      setFootDown2(false);
      setFootDown3(true);
      setFootDown4(false);
    } else {
      setFootDown3(false);
    }
  };
  const showFootDown4 = () => {
    if (!footdown4) {
      setFootDown1(false);
      setFootDown2(false);
      setFootDown3(false);
      setFootDown4(true);
    } else {
      setFootDown4(false);
    }
  };
  return (
    <div>
      <div className="footer-container">
        {/* Bigscreen */}

        <div className="bgs-footer">
          <div className="bgs-l">
            <span>About</span>
            <span>For Customers</span>
            <span>eNaira Wallet</span>
            <span>eNaira News</span>
          </div>
          <div className="bgs-r">
            <span>Frequently Asked Questions</span>
            <span>Privacy Policy & Terms of Use</span>
            <span>Contact Us</span>
          </div>
        </div>

        <div className="bgs-footer-qr">
          <img alt="footer-qr0" src="./Images/QR Code.webp"></img>
        </div>

        <div className="footer-icons">
          <div className="ft-ic">
            <p>Instagram</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              color="currentColor"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fillRule="nonzero"
                  d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="ft-ic">
            <p>Facebook</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              color="currentColor"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"></path>
              </g>
            </svg>
          </div>
          <div className="ft-ic">
            <p>WhatsApp</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              color="currentColor"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill-rule="nonzero"
                  d="M2.004 22l1.352-4.968A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 0 0-.371.1 1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 0 0 6.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 0 0 3.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231c.166-.088.244-.132.383-.22 0 0 .043-.028.125-.09.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 0 0-.177-.041.482.482 0 0 0-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 0 1-.368.13 1.416 1.416 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 0 1-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 0 0 .263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004z"
                ></path>
              </g>
            </svg>
          </div>
          <div className="ft-ic">
            <p>Youtube</p>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              color="currentColor"
              height="1.25em"
              width="1.25em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path>
              </g>
            </svg>
          </div>
        </div>

        <div className = "footer-signoff">
            
            <div>© 2021 eNaira</div>
            <div>Central Bank of Nigeria Issued Digital Currency</div>

        </div>
        {/* Bigscreen ends */}

        <div className="mobile-footer">
          <div className="footer-nav-menu">
            <div
              className={footdown1 ? "footer-heading-border" : "footer-heading"}
              onClick={showFootDown1}
            >
              <h3>About eNaira</h3>
              <i
                className={
                  footdown1 ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              ></i>
            </div>

            <div className="footcontainer">
              <ul className={footdown1 ? "foot-display" : null}>
                <li>Overview</li>
                <li>eNaira Design Paper</li>
                <li>eNaira Features</li>
                <li>Privacy Policy & Terms of Use</li>
                <li>Contact Us</li>
                <li>Frequently Asked Questions</li>
              </ul>
            </div>
          </div>
          <div className="footer-nav-menu">
            <div
              className={footdown2 ? "footer-heading-border" : "footer-heading"}
              onClick={showFootDown2}
            >
              <h3>eNaira Wallet</h3>
              <i
                className={
                  footdown2 ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              ></i>
            </div>

            <div className="footcontainer">
              <ul className={footdown2 ? "foot-display" : null}>
                <li>Get Started</li>
                <li>Available Merchants</li>
                <li>Fund Wallet</li>
              </ul>
            </div>
          </div>
          <div className="footer-nav-menu">
            <div
              className={footdown3 ? "footer-heading-border" : "footer-heading"}
              onClick={showFootDown3}
            >
              <h3>For Customers</h3>
              <i
                className={
                  footdown3 ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              ></i>
            </div>

            <div className="footcontainer">
              <ul className={footdown3 ? "foot-display" : null}>
                <li>For Individuals</li>
                <li>For Financial Institutions</li>
                <li>For Government</li>
                <li>For Businesses</li>
                <li>For NGOs</li>
              </ul>
            </div>
          </div>
          <div className="footer-nav-menu">
            <div
              className={footdown4 ? "footer-heading-border" : "footer-heading"}
              onClick={showFootDown4}
            >
              <h3>eNaira News</h3>
              <i
                className={
                  footdown4 ? "fas fa-chevron-up" : "fas fa-chevron-down"
                }
              ></i>
            </div>

            <div className="footcontainer">
              <ul className={footdown4 ? "foot-display" : null}>
                <li>Community</li>
                <li>Featured Galleries</li>
                <li>Arount The World</li>
                <li>Insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
