import "./Footer.css";
import React from "react";
import { FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <h3>Kontakt mig</h3>
          <div className="location">
            <FaHome
              size={20}
              style={{
                color: "fff",
                marginRight: "1.2rem",
                marginTop: "0.6rem",
              }}
            />
            <p>Aarhus, Danmark</p>
          </div>
          <a href="mailto:Diaanjum@outlook.dk" className="email">
            <FaMailBulk
              size={20}
              style={{
                color: "fff",
                marginRight: "1.2rem",
                marginTop: "0.6rem",
              }}
            />
            <p>Diaanjum@outlook.dk</p>
          </a>
          <a
            href="https://www.linkedin.com/in/nadia-anjum02"
            className="social"
          >
            <FaLinkedin
              size={20}
              style={{
                color: "fff",
                marginRight: "1.2rem",
                marginTop: "0.6rem",
              }}
            />
            <p>Linkedin</p>
          </a>
        </div>
        <div className="right">
          <h3>Se mere</h3>
          <a className="Footertekst" href="/Om-mig">
            {" "}
            <p>Om mig</p>
          </a>
          <a className="Footertekst" href="/Projekter">
            {" "}
            <p>Projekter</p>
          </a>
          <a className="Footertekst" href="/Kontakt">
            {" "}
            <p>Kontakt</p>
          </a>
        </div>
      </div>
      <div className="copy-nad">
        <p>© Nadia Anjum 2022</p>
      </div>
    </div>
  );
}
