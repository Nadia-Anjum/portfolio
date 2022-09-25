import "./Kontakt.css";
import React from "react";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import profil from "../Assets/Nadia Anjum.jpg";
export default function Kontakt() {
  return (
    <section>
      <div className="kontakt">
        <div className="rightkontakt">
          <div className="img-container">
            <img src={profil} className="img" alt="Profil billede" />
          </div>
        </div>
        <div className="leftkontakt">
          <h1 className="kontaktHeader">Kontakt mig</h1>
          <p>
            Er du interesseret eller har et spørgsmål, så er du velkommen til at
            sende mig en besked.
            <div>
              {" "}
              <br></br>
            </div>
            <a href="mailto:Diaanjum@outlook.dk" className="email1">
              <FaMailBulk
                size={20}
                style={{
                  color: "#533875",
                  marginRight: "1.2rem",
                  marginTop: "0.6rem",
                }}
              />
              <p
                style={{
                  color: "#533875",
                }}
              >
                Diaanjum@outlook.dk
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/nadia-anjum02"
              className="social1"
            >
              <FaLinkedin
                size={20}
                style={{
                  color: "#533875",
                  marginRight: "1.2rem",
                  marginTop: "0.6rem",
                }}
              />
              <p
                style={{
                  color: "#533875",
                }}
              >
                Linkedin
              </p>
            </a>
          </p>
        </div>
      </div>
      <div>
        <br></br>
      </div>
    </section>
  );
}
