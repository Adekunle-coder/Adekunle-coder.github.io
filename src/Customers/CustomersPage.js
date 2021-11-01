import React from "react";
import "../Wallet/WalletPage.css";
import TabSection from "../About/TabSection";
import TabSectionCard from "../About/TabSectionCard";
import TabShowcase from "../About/TabShowcase";
import Header from "../Homepage/Header";
import OptIn from "../Homepage/OptIn";
import Scan from "../Homepage/Scan";
import FAQs from "../Homepage/FAQs";
import Footer from "../Homepage/Footer";

const CustomersPage = () => {
  let image = "./Images/4Customersbccc.jpeg";
  let CardIndi = "./Images/4Individuals.jpeg";
  let Card4Financialinstitutions = "./Images/4FinanciaInstitutions.jpeg";
  let Card4Government = "./Images/4Government.jpeg";
  let Card4Business = "./Images/4Business.jpeg";
  let Card4NGOs = "./Images/4NGOs.jpeg";
  let title = "You are More!";
  const subtitle = "";
  const message =
    "We create specific solutions that are all-encompassing for individuals and organizations. We don’t run a one-size fits all service model. eNaira exists not just in your wallet but in our tech lab, thinking and rethinking ways, it is a product of our belief that we can make life easy, safe, one Naira at a time. Feel free to visit the link(s) that concern you and if you can’t find anyone, know that we are reengineering to meet your expectations.";
  return (
    <div>
      <Header />
      <TabShowcase image={image} text="eNaira For Customers" />
      <TabSection title={title} subtitle={subtitle} message={message} />
      <div className="div-aligner">
        <TabSectionCard image={CardIndi} text="For Individuals" />
        <TabSectionCard
          image={Card4Financialinstitutions}
          text="For Financial Institutions"
        />
        <TabSectionCard image={Card4Government} text="For Government" />
        <TabSectionCard image={Card4Business} text="For Businesses" />
        <TabSectionCard image={Card4NGOs} text="For NGOs" />
      </div>
      <Scan />
      <OptIn />
      <FAQs />
      <Footer />

    </div>
  );
};

export default CustomersPage;
