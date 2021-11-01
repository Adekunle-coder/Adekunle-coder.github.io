import React from "react";
import "./Scan.css"

const Scan = () => {
  return (
    <div>
      <div className="scan-container">
        <div className="inner-scan-div">
        <div className = "inner-header">
          <h2>Download the app or scan the QR code now to get started.</h2>
        </div>
          <div className = "qr-stores-div">
          <div className="google-play">
            <svg viewBox="0 0 24 24">
              <path d="M20.91887,10.653c-.31445-.16992-3.01074-1.73438-4.02246-2.32324l-.00293-.002L4.6386,1.25262a1.679,1.679,0,0,0-1.40711-.1593c-.02618.0094-.05078.01886-.07623.03051a1.41835,1.41835,0,0,0-.17291.06922,1.51864,1.51864,0,0,0-.73828,1.36426V21.54266a1.43542,1.43542,0,0,0,.69238,1.2705,1.30761,1.30761,0,0,0,.15479.06373c.02893.01336.05651.025.08636.03552a1.37893,1.37893,0,0,0,.44635.0824,1.67263,1.67263,0,0,0,.83106-.23145c.38867-.22559,12.43847-7.18262,12.43847-7.18262L20.914,13.25945a1.52522,1.52522,0,0,0,.8418-1.334A1.49078,1.49078,0,0,0,20.91887,10.653ZM4.24407,19.839V4.10186l7.94012,7.85907Zm5.018-2.16168,4.34351-4.30957,1.14954,1.13782C13.49047,15.23583,11.35381,16.4696,9.26207,17.67736Zm4.3418-7.125L9.206,6.19933l5.55365,3.2063ZM16.55065,13.469l-1.52539-1.50977L16.553,10.44341c.72027.41828,1.84283,1.06934,2.6159,1.51429Z"></path>
            </svg>
            <span class="google-text">
              <span>GET IT ON</span>
              <span className = "boldMe">Google Play</span>
            </span>
          </div>
          <div className="qr-image-div">
            <img alt="qrcode" src="./Images/QR Code.webp"></img>
            <p>Scan the QR code with your phone to download</p>
          </div>
          <div className="apple-store">
            <svg viewBox="0 0 24 24">
              <path d="M14.94,5.19A4.38,4.38,0,0,0,16,2,4.44,4.44,0,0,0,13,3.52,4.17,4.17,0,0,0,12,6.61,3.69,3.69,0,0,0,14.94,5.19Zm2.52,7.44a4.51,4.51,0,0,1,2.16-3.81,4.66,4.66,0,0,0-3.66-2c-1.56-.16-3,.91-3.83.91s-2-.89-3.3-.87A4.92,4.92,0,0,0,4.69,9.39C2.93,12.45,4.24,17,6,19.47,6.8,20.68,7.8,22.05,9.12,22s1.75-.82,3.28-.82,2,.82,3.3.79,2.22-1.24,3.06-2.45a11,11,0,0,0,1.38-2.85A4.41,4.41,0,0,1,17.46,12.63Z"></path>
            </svg>
            <span class="apple-text">
              <span>AVAILABLE ON THE</span>
              <span className = "boldMe">App Store</span>
            </span>
          </div>
          </div>
          <div className = "brand-showcase-div">
              <img alt = "brand-showcase" src = "./Images/showcase.webp"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scan;
