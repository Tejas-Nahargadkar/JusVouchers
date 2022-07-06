import React from "react";
import "./DigitalMarketingPage.css";
import packageimage04 from "../asset/sa1 (7 files merged)_page-0002.jpg";
import rowimga01 from "../asset/sa1 (7 files merged)_page-0001.jpg";
import dotarrow from "../asset/dotarrow.png";
import modalImage01 from "../asset/sa1 (7 files merged)_page-0003.jpg";
import modalImage02 from "../asset/sa1 (7 files merged)_page-0004.jpg";
import modalImage03 from "../asset/sa1 (7 files merged)_page-0005.jpg";
import ModalImage from "react-modal-image";
import Brochure from "../asset/Brochure.pdf";
import { Download } from "@mui/icons-material";
export default function DigitalMarketingPage() {
  return (
    <div className="DigitalMarketingPage-Container">
      <div className="DigitalMarketingPage-Header">
        <h1>Jus Vouchers - Grow Your Business</h1>
        <span></span>
      </div>
      <div className="DigitalMarketing-Banner">
        <div className="Marketing-Content">
          <p>
            Jus Vouchers marketing solution partners offer free account
            management assistance and expert advice.In the early stages of your
            company's life, you want to get your name out there and begin to
            expand. You can't expect this to happen right away, of course.Hard
            work, patience, and perseverance are necessary for growth. There
            isn't a step or secret to getting ahead of the competition or seeing
            rapid success in your sector. Website is the #2 channel used in
            marketing, behind social media. (Source:
            https://www.hubspot.com/marketing-statistics) 75% of marketers
            increased their company’s credibility and trust with digital
            marketing tactics. Source: Content Marketing Institute, 2020
          </p>
        </div>
        <div className="Marketing-image">
          <img src={packageimage04} alt="" />
        </div>
      </div>
      <div className="Download-Brochure">
        <p>For More Information-</p>
        <a download href={Brochure} target="_blank" rel="noreferrer">
          Brochure
          <Download />
        </a>
      </div>
      <div className="DigitalMarketing-Row">
        <div className="DigitalMarketing-Row-Image">
          <img src={rowimga01} alt="" />
        </div>
        <div className="DigitalMarketing-row-content">
          <div className="Marketing-Row-Header">
            <h1>Our Internet Marketing Services</h1>
          </div>
          <div className="content-row">
            <img src={dotarrow} alt="" />
            <p>DIGITAL COMPETITIVE ANALYSIS</p>
          </div>
          <div className="content-row">
            <img src={dotarrow} alt="" />
            <p>WEBSITE DESIGN & DEVELOPMENT SERVICES</p>
          </div>
          <div className="content-row">
            <img src={dotarrow} alt="" />
            <p>SEARCH ENGINE OPTIMIZATION (SEO)</p>
          </div>

          <div className="content-row">
            <img src={dotarrow} alt="" />
            <p>GOOGLE LOCAL SERVICES ADVERTISING</p>
          </div>
          <div className="content-row">
            <img src={dotarrow} alt="" />
            <p>GOOGLE MY BUSINESS</p>
          </div>
        </div>
      </div>
      <div className="DigitalMarketing-Packages">
        <div className="DigitalMarketing-Packages-Header">
          <h1>Our Packages</h1>
        </div>
        <div className="DigitalMarketing-Packages-Row">
          <div className="Modal-Image">
            <ModalImage
              small={modalImage01}
              medium={modalImage01}
              alt="Hello World!"
            />
            <h3>Bronze Package</h3>
          </div>
          <div className="Modal-Image">
            <ModalImage
              small={modalImage02}
              medium={modalImage02}
              alt="Hello World!"
            />
            <h3>Silver Package</h3>
          </div>
          <div className="Modal-Image">
            <ModalImage
              small={modalImage03}
              medium={modalImage03}
              alt="Hello World!"
            />
            <h3>Gold Package</h3>
          </div>
        </div>
      </div>
      <div className="DigitalMarketing-Content">
        <p>
          Services for Internet Marketing More than ever, marketing has evolved
          in the last decade, bringing us out of the age of TV spots and print
          ads and into the age of websites, online video, social media and
          Google.{" "}
        </p>
        <p>
          Get support from JusVoucher's digital marketing team to increase the
          number of qualified visitors to your website and turn those visitors
          into leads or sales.{" "}
        </p>
        <h4>
          What's the holdup? Make a call to us right now and we'll help you take
          over the internet.
        </h4>
        <p>
          Jus Vouchers focuses on the creation and maintenance of online
          presences. Designed for ease of use, functionality, security, and
          scalability as your company expands, our web experiences are powerful,
          feature-rich, and digitally revolutionary.
        </p>
        <h4>
          Clients benefit from the expertise of our web application developers
          and web designers.{" "}
        </h4>
        <p>
          Our website design and development services include anything from
          establishing mobile web solutions and responsive designs to building
          custom e-commerce or intranet experiences using the most current and
          established web technologies.{" "}
        </p>
        <p>
          In an increasingly competitive market, where customers are
          increasingly basing their purchasing decisions on their online
          experiences, your website's appearance, usability, and accessibility
          are more important than ever.
        </p>
        <h4>
          Up to 85% of customers visit a company or service provider's website
          before making a purchase.
        </h4>
      </div>
    </div>
  );
}
