import React, { useState } from "react";
import "./Navbar.css";
import NavbarLogo from "../asset/Navbar-logo.png";
import { Link } from "react-router-dom";
import {
  Book,
  Close,
  ContactSupport,
  Facebook,
  Home,
  Info,
  Instagram,
  LinkedIn,
  Menu,
  Twitter,
} from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { authToken } = useAuth();
  return (
    <>
      <div className="Navbar-Container">
        <div className="Second-Bar">
          <div className="Nav-logo">
            <Link to="/">
              {" "}
              <img src={NavbarLogo} alt="" />{" "}
            </Link>
          </div>

          <div className="Nav-Links">
            <Link to="/">
              {" "}
              <Home /> HOME
            </Link>
            <Link to="/aboutus">
              <Info /> ABOUT US
            </Link>
            <Link to="/Blogs">
              <Book /> OUR BLOGS
            </Link>
            <Link to="/contactus">
              {" "}
              <ContactSupport /> CONTACT US
            </Link>
          </div>
          <div className="Nav-Buttons">
            <Link to="/PackagesPage" className="Package-btn">
              EXCLUSIVE PACKAGES
            </Link>
            <div className="First-Bar-Buttons">
              {authToken && (
                <div className="First-Bar-Buttons-Row">
                  <Link to="/Dashboard" className="Accounts-BTN">
                    My Account
                  </Link>
                </div>
              )}

              <div className="First-Bar-Buttons-Row">
                <Link to="/login" className="Accounts-BTN">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="Menu-Trigger">
            <button
              className="Menu-btn"
              onClick={() => {
                setShowMenu(true);
              }}
            >
              <Menu />
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="Mobile-Menu">
            <div
              className="empty"
              onClick={() => {
                setShowMenu(false);
              }}
            ></div>
            <div className="links">
              <div className="top">
                <button
                  className="Close-btn"
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <Close />
                </button>
              </div>
              <Link to="/">
                {" "}
                <Home /> HOME
              </Link>
              <Link to="/aboutus">
                <Info /> ABOUT US
              </Link>
              <Link to="/Blogs">
                <Book /> OUR BLOGS
              </Link>
              <Link to="/contactus">
                {" "}
                <ContactSupport /> CONTACT US
              </Link>

              <div className="Mobile-Nav-buttons">
                {" "}
                <Link to="/PackagesPage" className="Package-btn">
                  EXCLUSIVE PACKAGES
                </Link>
                {authToken && (
                  <Link to="/Dashboard" className="Accounts-BTN">
                    My Account
                  </Link>
                )}
                <Link to="/login" className="Accounts-BTN">
                  Login
                </Link>
              </div>
              <div className="Mobile-Social-Media-Bar">
                <a
                  className="Facebook"
                  href="/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <Facebook />
                </a>

                <a
                  href="/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="Instagram"
                >
                  <Instagram />
                </a>
                <a
                  href="/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="Twitter"
                >
                  <Twitter />
                </a>
                <a
                  href="/"
                  target={"_blank"}
                  rel="noreferrer"
                  className="LinkedIn"
                >
                  <LinkedIn />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
