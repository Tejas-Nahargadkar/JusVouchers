import React from "react";

import "./SocialMedia.css";
import { Link } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export default function SocialMedia() {
  return (
    <div className="SocialMedia-Feedback">
      <div className="Icon-Bar">
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
          <Instagram/>
        </a>
        <a
          href="/"
          target={"_blank"}
          rel="noreferrer"
          className="Twitter"
        >
          <Twitter/>
        </a>
        <a href="/"   target={"_blank"}
          rel="noreferrer"
           className="LinkedIn">
          <LinkedIn/>
        </a>
      </div>
    </div>
  );
}
