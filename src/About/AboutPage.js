import React from "react";
import "../Wallet/WalletPage.css";
import Header from "../Homepage/Header";
import "./AboutPage.css";
import TabSection from "./TabSection";
import TabShowcase from "./TabShowcase";
import TabSectionCard from "./TabSectionCard";
import Scan from "../Homepage/Scan";
import OptIn from "../Homepage/OptIn";
import FAQs from "../Homepage/FAQs";
import Footer from "../Homepage/Footer";

const AboutPage = () => {
  let image = "./Images/Abs.webp";
  let CardOverview = "./Images/overview.jpeg";
  let CardFeatures = "./Images/features.jpeg";
  let CardDesign = "./Images/design.jpeg";
  let CardPolicy = "./Images/policy.jpeg";
  let CardContact = "./Images/about-contact.jpeg";
  let CardFAQ = "./Images/about-faq.jpeg";

  let title = "The eNaira Story";
  let subtitle = "Not Just Another CBDC!";
  let message =
    "With 81 countries and more on the race to develop own their Central Bank Digital Currencies, let it be very clear that we are not just another CBDC, we are a people-oriented digital currency leveraging technology to connect individuals and businesses for easy trading and financial inclusion. We push the boundaries, bridge the gaps, and tell actual humane stories. We are the foremost audience-centric digital currency brandishing a face.";
  return (
    <div>
      <Header />
      <TabShowcase image={image} text="About eNaira" />
      <TabSection title={title} subtitle={subtitle} message={message} />
      <div className="div-aligner">
        <TabSectionCard image={CardOverview} text="Overview" />
        <TabSectionCard image={CardFeatures} text="eNaira Features" />
        <TabSectionCard image={CardDesign} text="eNaira Design Paper" />
        <TabSectionCard
          image={CardPolicy}
          text="Privacy Policy & Terms of Use"
        />
        <TabSectionCard image={CardContact} text="Contact Us" />
        <TabSectionCard image={CardFAQ} text="Frequently Asked Questions" />
      </div>
      <Scan />
      <OptIn />
      <FAQs />
      <Footer />
    </div>
  );
};

export default AboutPage;
