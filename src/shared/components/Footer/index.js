import React from "react";
import {
  LogoGithub16,
  LogoLinkedin16,
  LogoTwitter16,
  Email16,
} from "@carbon/icons-react";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer-component-container">
      <div className="footer-component-content">
        <div className="footer-component-contact-section">
          <div className="footer-component-contact-section-logo">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "2rem",
              }}
            >
              <Email16 color="#768390" />
              <small
                style={{
                  fontFamily: "display-text-medium",
                  fontSize: "0.6rem",
                  color: "#768390",
                  marginLeft: "0.5rem",
                }}
              >
                stephen.sanwo@icloud.com
              </small>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "2rem",
              }}
            >
              <LogoGithub16 color="#768390" />
              <small
                style={{
                  fontFamily: "display-text-medium",
                  fontSize: "0.6rem",
                  color: "#768390",
                  marginLeft: "0.5rem",
                }}
              >
                stephensanwo
              </small>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "2rem",
              }}
            >
              <LogoLinkedin16 color="#768390" />
              <small
                style={{
                  fontFamily: "display-text-medium",
                  fontSize: "0.6rem",
                  color: "#768390",
                  marginLeft: "0.5rem",
                }}
              >
                stephensanwo
              </small>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "2rem",
              }}
            >
              <LogoTwitter16 color="#768390" />
              <small
                style={{
                  fontFamily: "display-text-medium",
                  fontSize: "0.6rem",
                  color: "#768390",
                  marginLeft: "0.5rem",
                }}
              >
                stephensanwo
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
