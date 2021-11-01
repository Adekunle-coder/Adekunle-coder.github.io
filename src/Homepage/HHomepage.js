import React from "react";
import EmailSignup from "./EmailSignup";
import FAQs from "./FAQs";
import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import News from "./News";
import OptIn from "./OptIn";
import Scan from "./Scan";
import Slider from "./Slider";
import VideoSection from "./VideoSection";
import Welcome from "./Welcome";
import Modal from "./Modal"


const HHomepage = () => {
  return (
    <div>
      {/* <Modal /> */}
      <Header />
      <Slider />
      <EmailSignup />
      <Welcome />
      <VideoSection />
      <Features />
      <Scan />
      <OptIn />
      <News />
      <FAQs />
      <Footer />
    </div>
  );
};

export default HHomepage;
