import React from "react";
import { Link } from "react-router-dom";
import "./HomePageContent.css";
export default function HomePageContent() {
  return (
    <div className="HomePageContent-Container">
      <div className="HomePageContent-Header">
        <h1>Joy will not come in installments anymore!</h1>
      </div>
      <div className="Row-bg">
        <p>
          Shopaholics, unite! Finding the perfect outfit and matching shoes can
          make your entire day, and we know this because we've done it for you.
          This is why Vouchers Portal is at the top of your shopping list, with
          infinite discounts and deals - consider it the cherry on top of the
          cake! To ensure that every shopping trip ends with a joyful cart and
          that your favorite products fit snugly in your wallet, we provide all
          the tools you need. To help you understand, we'd like to share our
          perspective with you.
        </p>
      </div>
      <div className="HomePageContent-ReadMore-btn">
        <Link to="/AboutUs" className="Readmore-btn">Read More !</Link>
      </div>
    </div>
  );
}
