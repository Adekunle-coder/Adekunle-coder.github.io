import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AboutPage from "../About/AboutPage";
import { EventContext } from "../EventContext";
import "./TogglerNav.css";

const TogglerNav = () => {
  const {
    aboutPage,
    Aboutclick,
    Walletclick,
    Customersclick,
    Downloadclick,
    Newsclick,
    eWallet,
    customers,
    news,
    dropdown,
    showDropDown,
    dropdownWallet,
    showDropDownWallet,
    dropdownCustomers,
    showDropDownCustomers,
    dropdownNews,
    showDropDownNews,
  } = useContext(EventContext);

  return (
    <div>
      <div className="toggler-nav">
        <div className="toggler-nav-menu">
          <div
            className={dropdown ? "toggler-heading-border" : "toggler-heading"}
            onClick={showDropDown}
          >
            <Link style={{ textDecoration: "none", color: "inherit" }} to = "/AboutPage">

            <h3
              className={aboutPage ? "toggler-fade" : null}
              onClick={Aboutclick}
            >
              About
            </h3>
            </Link>
            <i
              className={dropdown ? "fas fa-chevron-up" : "fas fa-chevron-down"}
            ></i>
          </div>

          <div className="dropcontainer">
            <ul className={dropdown ? "drop-display" : null}>
              <li>Overview</li>
              <li>eNaira Design Paper</li>
              <li>eNaira Features</li>
              <li>Privacy Policy & Terms of Use</li>
              <li>Contact Us</li>
              <li>Frequently Asked Questions</li>
            </ul>
          </div>
        </div>
        <div className="toggler-nav-menu">
          <div
            className={
              dropdownWallet ? "toggler-heading-border" : "toggler-heading"
            }
            onClick={showDropDownWallet}
          >
            <Link style={{ textDecoration: "none", color: "inherit" }} to = "/WalletPage">
              
            <h3
              className={eWallet ? "toggler-fade" : null}
              onClick={Walletclick}
            >
              eNaira Wallet
            </h3>
              </Link>
            <i
              className={
                dropdownWallet ? "fas fa-chevron-up" : "fas fa-chevron-down"
              }
            ></i>
          </div>
          <div className="dropcontainer">
            <ul className={dropdownWallet ? "drop-display" : null}>
              <li>Get Started</li>
              <li>Available Merchants</li>
              <li>Fund Wallet</li>
            </ul>
          </div>
        </div>
        <div className="toggler-nav-menu">
          <div
            className={
              dropdownCustomers ? "toggler-heading-border" : "toggler-heading"
            }
            onClick={showDropDownCustomers}
          >
            <Link style={{ textDecoration: "none", color: "inherit" }} to = "/CustomersPage">
              
            <h3
              className={customers ? "toggler-fade" : null}
              onClick={Customersclick}
            >
              For Customers
            </h3>
              </Link>
            <i
              className={
                dropdownCustomers ? "fas fa-chevron-up" : "fas fa-chevron-down"
              }
            ></i>
          </div>
          <div className="dropcontainer">
            <ul className={dropdownCustomers ? "drop-display" : null}>
              <li>For Individuals</li>
              <li>For Financial Institutions</li>
              <li>For Government</li>
              <li>For Businesses</li>
              <li>For NGOs</li>
            </ul>
          </div>
        </div>
        <div className="toggler-nav-menu">
          <div
            className={
              dropdownNews ? "toggler-heading-border" : "toggler-heading"
            }
            onClick={showDropDownNews}
          >
            <Link style={{ textDecoration: "none", color: "inherit" }} to = "/NewsPage">
              
            <h3 className={news ? "toggler-fade" : null} onClick={Newsclick}>
              eNaira News
            </h3>
              </Link>
            <i
              className={
                dropdownNews ? "fas fa-chevron-up" : "fas fa-chevron-down"
              }
            ></i>
          </div>
          <div className="dropcontainer">
            <ul className={dropdownNews ? "drop-display" : null}>
              <li>Community</li>
              <li>Featured Galleries</li>
              <li>Around the World</li>
              <li>Insights</li>
            </ul>
          </div>
        </div>
        <div className="toggler-nav-menu show">
          <div className="toggler-heading">
            <h3>Download App</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TogglerNav;
