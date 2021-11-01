import React from "react";
import "./WalletPage.css"
import TabSection from "../About/TabSection";
import TabSectionCard from "../About/TabSectionCard";
import TabShowcase from "../About/TabShowcase";
import Header from "../Homepage/Header";
import Scan from "../Homepage/Scan";
import OptIn from "../Homepage/OptIn";
import FAQs from "../Homepage/FAQs";
import Footer from "../Homepage/Footer";


const WalletPage = () => {
  let image = "./Images/Wallet.webp";
  let cardImageStart = "./Images/mann.webp";
  let cardImageMerch = "./Images/merchant.jpeg";
  let cardImageWall = "./Images/fund-wallet.jpeg";
  let title = "Your Very Own Wallet";
  let subtitle = "A Wallet That Is True To You";
  let message =
    "Our eNaira wallet goes beyond an App, it is a companion for all transactions. At the core of our strategy sits a dire need to find the confluence between humanity and technology. Our wallet was designed to respond to your needs and thrash your worries. Careful thoughts and analytics from real Nigerian situations and global realities were distilled into creating the eNaira wallet. For us, the question is not ‘what can I do with my wallet?’ but ‘what can my wallet do for me?’";
  return (
    <div>
      <Header />
      <TabShowcase image={image} text="eNaira Wallet" />
      <TabSection title = {title} subtitle = {subtitle} message = {message} />
      <div className = "div-aligner">
      <TabSectionCard  image = {cardImageStart} text = "Get Started"/>
      <TabSectionCard  image = {cardImageMerch} text = "Available Merchants"/>
      <TabSectionCard  image = {cardImageWall} text = "Fund Wallet"/>
      </div>
      <Scan />
      <OptIn />
      <FAQs />
      <Footer />

    </div>
  );
};

export default WalletPage;
