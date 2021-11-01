import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../EventContext";
import "./Header.css";
import TogglerNav from "./TogglerNav";

const Header = () => {
  const {
    home,
    Homeclick,
    aboutPage,
    Aboutclick,
    Walletclick,
    Customersclick,
    NotaMenuclick,
    Newsclick,
    eWallet,
    customers,
    news,
    toggler,
    togglerOpen,
  } = useContext(EventContext);

 

  return (
    <div>
      <section>
        <div className="header">
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            <div className="logo" onClick={Homeclick}>
              {/* <img alt = "logo" src="./Images/enaira.jpg"></img> */}
              <svg viewBox="0 0 169 57" className="brand-logo">
                <g>
                  <path
                    d="M70.8535 27.3565V21.4463H62.9724C59.8562 9.11712 48.7568 0 35.5416 0C22.3264 0 11.2245 9.11712 8.10826 21.4463H0V27.3565H23.3856V30.3604H0V36.2706H8.29712C11.6558 48.2349 22.5817 57.0026 35.5391 57.0026C39.9441 57.0026 44.1144 55.9901 47.8303 54.1811L44.755 49.1035C41.9425 50.3806 38.8237 51.0924 35.5391 51.0924C25.8586 51.0924 17.61 44.9201 14.4632 36.2706H23.383V42.7076H29.253V36.2706H36.981L40.8808 42.7076H47.6951V36.2706H70.8535V30.3604H47.6951V27.3565H70.8535ZM29.253 30.3604V27.3565H31.5806L33.4003 30.3604H29.253ZM41.8276 30.3604H40.2759L38.4562 27.3565H41.8276V30.3604ZM41.8276 13.8144V21.4437H34.878L30.256 13.8144H23.3856V21.4437H14.2182C17.1608 12.4243 25.5958 5.9102 35.5416 5.9102C45.4874 5.9102 53.9198 12.4243 56.865 21.4463H47.6976V13.8144H41.8276Z"
                    fill="currentColor"
                  ></path>
                  <g>
                    <path d="M85.5974 30.4632C86.1002 32.2979 87.4656 33.2127 89.6937 33.2127C91.128 33.2127 92.2127 32.7245 92.9477 31.7506L95.9695 33.5057C94.5351 35.5922 92.4245 36.6355 89.635 36.6355C87.2334 36.6355 85.3065 35.9032 83.8517 34.441C82.397 32.9789 81.6722 31.1339 81.6722 28.9111C81.6722 26.7064 82.3893 24.8691 83.8237 23.3967C85.258 21.9243 87.0981 21.1868 89.344 21.1868C91.4751 21.1868 93.2335 21.9294 94.6194 23.4095C96.0052 24.8922 96.6968 26.7269 96.6968 28.9111C96.6968 29.3994 96.6483 29.9159 96.5514 30.4606H85.5974V30.4632ZM85.5387 27.5389H92.9477C92.7333 26.5445 92.2943 25.8044 91.6257 25.3162C90.957 24.828 90.1964 24.5838 89.344 24.5838C88.3359 24.5838 87.5039 24.8434 86.8454 25.3599C86.1895 25.8764 85.7531 26.601 85.5387 27.5389Z"></path>
                    <path d="M111.257 15.7468H115.266V36.2269H112.214L103.496 23.705V36.2269H99.4864V15.7468H102.534L111.254 28.2225V15.7468H111.257Z"></path>
                    <path d="M129.911 21.5979H133.66V36.2269H129.911V34.5001C128.788 35.9237 127.208 36.6355 125.174 36.6355C123.237 36.6355 121.575 35.8903 120.19 34.3973C118.804 32.9044 118.112 31.0774 118.112 28.9111C118.112 26.7449 118.804 24.9179 120.19 23.4249C121.575 21.932 123.237 21.1868 125.174 21.1868C127.208 21.1868 128.788 21.8986 129.911 23.3221V21.5979ZM122.994 31.8842C123.75 32.6551 124.71 33.0406 125.871 33.0406C127.032 33.0406 127.997 32.6551 128.762 31.8842C129.528 31.1133 129.911 30.124 129.911 28.9137C129.911 27.7034 129.528 26.7141 128.762 25.9432C127.997 25.1723 127.035 24.7868 125.871 24.7868C124.707 24.7868 123.75 25.1723 122.994 25.9432C122.239 26.7141 121.861 27.7034 121.861 28.9137C121.861 30.124 122.239 31.1133 122.994 31.8842Z"></path>
                    <path d="M138.92 19.8428C138.3 19.8428 137.761 19.6141 137.307 19.1542C136.853 18.6968 136.623 18.1546 136.623 17.5301C136.623 16.9057 136.85 16.361 137.307 15.8907C137.761 15.423 138.3 15.1892 138.92 15.1892C139.558 15.1892 140.107 15.423 140.561 15.8907C141.015 16.3584 141.245 16.9057 141.245 17.5301C141.245 18.1546 141.018 18.6968 140.561 19.1542C140.107 19.6141 139.558 19.8428 138.92 19.8428ZM137.06 36.2269V21.5979H140.809V36.2269H137.06Z"></path>
                    <path d="M147.985 24.1162C148.335 23.1808 148.909 22.4767 149.713 22.0091C150.517 21.5414 151.413 21.3075 152.401 21.3075V25.5218C151.257 25.3856 150.236 25.6194 149.335 26.2233C148.435 26.8272 147.985 27.8319 147.985 29.2375V36.2295H144.236V21.5979H147.985V24.1162Z"></path>
                    <path d="M165.072 21.5979H168.821V36.2269H165.072V34.5001C163.949 35.9237 162.369 36.6355 160.335 36.6355C158.398 36.6355 156.737 35.8903 155.351 34.3973C153.965 32.9044 153.273 31.0774 153.273 28.9111C153.273 26.7449 153.965 24.9179 155.351 23.4249C156.737 21.932 158.398 21.1868 160.335 21.1868C162.369 21.1868 163.949 21.8986 165.072 23.3221V21.5979ZM158.156 31.8842C158.911 32.6551 159.871 33.0406 161.032 33.0406C162.193 33.0406 163.158 32.6551 163.924 31.8842C164.689 31.1133 165.072 30.124 165.072 28.9137C165.072 27.7034 164.689 26.7141 163.924 25.9432C163.158 25.1723 162.196 24.7868 161.032 24.7868C159.868 24.7868 158.911 25.1723 158.156 25.9432C157.4 26.7141 157.023 27.7034 157.023 28.9137C157.023 30.124 157.4 31.1133 158.156 31.8842Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </Link>
          <div className="righty">
            <div className="nav">
              <div className={toggler ? "navvy-close" : "navvy"}>
                <ul>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/"
                  >
                    <li className={home ? "active" : null} onClick={Homeclick}>
                      Home
                    </li>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/AboutPage"
                  >
                    <li
                      className={aboutPage ? "active" : null}
                      onClick={Aboutclick}
                    >
                      About
                    </li>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/WalletPage"
                  >
                    <li
                      className={eWallet ? "active" : null}
                      onClick={Walletclick}
                    >
                      eNaira Wallet
                    </li>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/CustomersPage"
                  >
                    <li
                      className={customers ? "active" : null}
                      onClick={Customersclick}
                    >
                      For Customers
                    </li>
                  </Link>
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/NewsPage"
                  >
                    <li className={news ? "active" : null} onClick={Newsclick}>
                      eNaira News
                    </li>
                  </Link>
                </ul>
              </div>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/DownloadPage"
              >
                <button onClick={NotaMenuclick}>Download App</button>
              </Link>
            </div>
            <div className="icons">
              <Link style={{ textDecoration: "none", color: "inherit" }}
              to = "/SearchPage">
              <i className="fas fa-search" onClick={NotaMenuclick}></i>
              </Link>
              <div className="toggler" onClick={togglerOpen}>
                <i className={toggler ? "fas fa-times" : "fas fa-bars"}></i>
              </div>
            </div>
          </div>
        </div>
        {toggler ? <TogglerNav /> : null}
      </section>
    </div>
  );
};

export default Header;
