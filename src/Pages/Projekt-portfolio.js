import React from "react";
import "./Projekt-Styleportfolio.css";
import opgavepf1 from "../Assets/portfolio-content.png";
import { NavLink } from "react-router-dom";

export default function ProjektPF() {
  return (
    <section>
      <h1 className="portfolioHeader">Projekt Portfolio</h1>
      <div className="projektportfolio">
        <div className="rightprojektportfolio">
          <div className="img-containerportfolio">
            <img
              src={opgavepf1}
              className="imgportfolio1"
              alt="Profil billede"
            />
          </div>
        </div>

        <div className="leftprojektportfolio">
          <h2 className="projektportfolioUnderHeader">Beskrivelse</h2>
          <p>
            På 2. semester fik jeg projektet om at udvikle et potentielt
            template, som kunne være et bud på mit eget portfolio. Her handlede
            det om at udvikle sit personlige jeg visuelt, hvor sit eget udviklet
            design manual med sit logodesign skulle indrages og fremvise sin
            kreativitet på template sitet.
            <div>
              <br></br>
            </div>
            Jeg fik udarbejdet en designmanunal, hvor det indholder regler for
            brugen af mit logo og baggrundet for selve logoet. Hjemmesiden blev
            udarbejdet på html, css og bootstrap.
          </p>
          <h3 className="projektportfolioUnderHeader">Detaljer</h3>
          <a
            style={{ color: "#533875" }}
            href="https://portfolio-opgave.nadiaanjum.dk/"
            className="linkPf"
          >
            {" "}
            <p>Link til hjemmesiden</p>
          </a>

          <p>Udarbejdet på Erhvervsakademi MidtVest Herning - 2. semester</p>
          <p>1. Marts 2022</p>
          <NavLink to="/Projekter">
            <button className="button3">Se flere projekter</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
