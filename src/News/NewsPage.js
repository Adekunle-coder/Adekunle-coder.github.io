import React from "react";
import TabSection from "../About/TabSection";
import TabSectionCard from "../About/TabSectionCard";
import TabShowcase from "../About/TabShowcase";
import FAQs from "../Homepage/FAQs";
import Footer from "../Homepage/Footer";
import Header from "../Homepage/Header";
import OptIn from "../Homepage/OptIn";
import Scan from "../Homepage/Scan";
import "../Wallet/WalletPage.css";

const NewsPage = () => {
  let image = "./Images/news.jpeg";
  let CardComm = "./Images/community.jpeg";
  let CardFF = "./Images/features.jpeg";
  let CardAround = "./Images/around.webp";
  let CardIS = "./Images/insights.jpeg";
  let title = "Not Just News";
  let subtitle =
    "It Has Always Been About You, But Now Let’s Make It More Personal";
  let message =
    "We are more interested in people than we are in the technology that we created. eNaira is all about you, your stories, and that is the reason we have created and curated content covering all facets to inspire, celebrate, inform and re-assure. Here you will find out why we are interested in you. Make your journey and we will be here documenting every moment of it, creating and curating informative and inspiring contents all the way";

  return (
    <div>
      <Header />
      <TabShowcase image={image} text="eNaira News" />
      <TabSection title={title} subtitle={subtitle} message={message} />
      <div className="div-aligner">
        <TabSectionCard image={CardComm} text="For Community" />
        <TabSectionCard image={CardFF} text="Featured Galleries" />
        <TabSectionCard image={CardAround} text="Around The World" />
        <TabSectionCard image={CardIS} text="Insights" />
      </div>
      <Scan />
      <OptIn /> 
      <FAQs /> 
      <Footer />
    </div>
  );
};

export default NewsPage;
