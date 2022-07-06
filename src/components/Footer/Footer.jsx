import React from "react";
import "./Footer.css";
import FooterLogo from "../asset/footer-logo.png";
import {
  Facebook,
  Instagram,
  LinkedIn,
  LocalPhone,
  LocationOn,
  PhoneAndroid,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="Footer-Container">
      <div className="Footer-Rows">
        <div className="Footer-Logo">
          <img src={FooterLogo} alt="" />
        </div>

        <div className="Quick-Links-Container">
          <div className="Quick-Link-Header">
            <h3>Quick Links</h3>
            <span></span>
          </div>
          <div className="Links">
            <Link to="/">Home</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/Blogs">Blog</Link>
            <Link to="/contactus">Contact Us</Link>
          </div>
        </div>

        <div className="Contact-Info-Container">
          <div className="Contact-Info-Header">
            <h3>Contact Info</h3>
            <span></span>
          </div>
          <div className="Contact-Info-col">
            <div className="Contact-Info-Rows">
              <LocationOn />{" "}
              <div className="Contact-Info-Rows-Col">
                <h4>Address:</h4>
                <p>
                  2nd Floor Sheela Arcade, Near IDFC Bank, MP Nagar, Zone-1,
                  Bhopal (M.P)
                </p>
              </div>
            </div>
            <div className="Contact-Info-Rows">
              <LocalPhone />{" "}
              <div className="Contact-Info-Rows-Col">
                <h4>Phone:</h4>
                <a href="tel:1800-889-1312">1800-889-1312</a>
              </div>
            </div>
            <div className="Contact-Info-Rows">
              <PhoneAndroid />{" "}
              <div className="Contact-Info-Rows-Col">
                <h4>Mobile:</h4>
                <a href="tel:+91-6267 757 223">+91-6267 757 223</a>
              </div>
            </div>
          </div>
        </div>
        <div className="Map-Container">
          <div className="Map-Header">
            <h3>Locate Us</h3>
            <span></span>
          </div>
          <div className="Map-Frame">
            <iframe
              title="loction"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29329.31093754284!2d77.41735653955077!3d23.237123300000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4265d61f094b%3A0x208057dfde3dbae8!2sIDFC%20First%20Bank%20Loan%20Centre!5e0!3m2!1sen!2sus!4v1652334862926!5m2!1sen!2sus"
              width="550"
              height="200"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="Partition">
        <span></span>
      </div>
      <div className="Credit-Container">
        <div className="Footer-Social-Media">
          <a href="/">
            {" "}
            <Facebook />
          </a>
          <a href="/">
            {" "}
            <Instagram />
          </a>
          <a href="/">
            {" "}
            <Twitter />
          </a>
          <a href="/">
            {" "}
            <LinkedIn />
          </a>
        </div>
        <div className="Credit">
          <h3>
            Design & Developed By <a href="/">TechJain</a> IT Solutions
          </h3>
        </div>
      </div>
    </div>
  );
}
