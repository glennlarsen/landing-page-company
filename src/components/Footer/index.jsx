import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { GB, DE } from "country-flag-icons/react/3x2";
import Tooltip from "@mui/material/Tooltip";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-box">
          <div className="social">
            <a href="https:/www.facebook.com">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https:/www.twitter.com">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https:/www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <address>©Copyright My Website 2022</address>
        </div>
        <div className="footer-box">
          <h3>Links</h3>
          <div className="footer-underline"></div>
          <a href="/">Home</a>
          <a>Services</a>
          <a>Who we are</a>
          <a>Contact</a>
        </div>
        <div className="footer-box">
          <h3>Legal</h3>
          <div className="footer-underline"></div>
          <a>Terms</a>
          <a>Privacy</a>
        </div>
        <div className="footer-box">
          <h3>Language</h3>
          <div className="footer-underline"></div>
          <div className="flags">
            <Tooltip title="English">
              <div>
                <GB className="flag-icons" />
              </div>
            </Tooltip>
            <Tooltip title="German">
              <div>
                <DE className="flag-icons" />
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
