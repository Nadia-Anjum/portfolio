import React from "react";
import "./Projekt-Stylehgf.css";
import { NavLink } from "react-router-dom";
import Hgf from "../Assets/hgf-1semester.png";

export default function ProjektHGF() {
  return (
    <section>
      <h1 className="portfolioHeader">Projekt HGF</h1>

      <div className="projekthgf">
        <div className="rightprojekthgf">
          <div className="img-containerhgf">
            <img src={Hgf} className="imghgf" alt="Forside for hgf" />
          </div>
        </div>

        <div className="leftprojekthgf">
          <h2 className="projekthgfUnderHeader">Beskrivelse</h2>
          <p>
            På mit 1. semester eksamensprojekt har jeg samarbejdet med HGF
            gymnastik. Til projektet skulle jeg give et bud på et udviklet og
            redesignet digital løsning af deres hjemmeside, så den blev mere
            tidsvarende og tilpassede foreningens mål og ønsker.
            <div>
              <br></br>
            </div>
            Foreningen havde et ønske om at forbeholde den blå farve pg sikre en
            bedre brugeroplevelse for HGF's forskellige målgruppe. Til det har
            jeg gennem designet valgt, at tydliggøre ønsket med billeder og
            farver, der skal vise deres identitet. Herfra blev hjemmesiden
            udarbejdet hjemmesiden på html, css og bootstrap.
          </p>
          <h3 className="projekthgfUnderHeader">Detaljer</h3>
          <a
            style={{ color: "#533875" }}
            href="https://hgf.nadiaanjum.dk/"
            className="linkhgf"
          >
            {" "}
            <p>Link til hjemmesiden</p>
          </a>

          <p>Udarbejdet på Erhvervsakademi MidtVest Herning - 1. semester</p>
          <p>Dato: 15. december 2021</p>
          <NavLink to="/Projekter">
            <button className="button3">Se flere projekter</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
