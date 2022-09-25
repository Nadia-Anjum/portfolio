import "./ProjekterStyle.css";
import React from "react";
import Anh from "../Assets/anh-2semester.png";
import opgavepf from "../Assets/portfolio-opgave-2semester.png";
import Hgf from "../Assets/hgf-1semester.png";
import Biomega from "../Assets/biomega-2contentways-copy.png";

import { NavLink } from "react-router-dom";
export default function Projekter() {
  return (
    <section>
      <h1 className="mainHeaderprojekt">Projekter</h1>
      <h3 className="introh3projekt">
        Nedestående kan du se en samling af de projekter, som jeg har arbejdet
        med gennem min uddannelse som multimediedesigner.
      </h3>
      <div className="projekt1">
        <div className="rightprojekt1">
          <div className="img-container1">
            <img src={Anh} className="img1" alt="Profil billede" />
          </div>
        </div>
        <div className="leftprojekt1">
          <h2 className="projekt1Header">2. Semester eksamensprojekt</h2>
          <p>
            Til mit 2. semester eksamensprojekt samarbejdet jeg og to af mine
            medstuderende med virksomheden A New Hope, som er et
            rollespilsforening i Herning. Foreningen kan beskrives med tre ord:
            Fællesskab, leg og personlig udvikling. Disse keywords skulle være
            med til at tydeliggøre hvem foreningen var med deres primære mål om
            at få flere nye medlemmer. Vi kom med et bud på et redesignet
            hjemmeside og content til forskellige digitale produkter som
            foreningen kunne bruge.
            <div>
              {" "}
              <br></br>
            </div>
            <p className="pFarve">WORDPRESS | CSS | JAVASCRIPT</p>
            <NavLink to="/Projekt-ANH">
              <button className="button3">Læs mere</button>
            </NavLink>
          </p>
        </div>
      </div>
      <div className="projekt2">
        <div className="leftprojekt2">
          <h2 className="projekt2Header">2. Semester portfolio projekt</h2>
          <p>
            På 2. semester fik jeg projektet om at udvikle et potentielt
            template, som kunne være et bud på mit eget portfolio. Her handlede
            det om at udvikle sit personlige jeg visuelt, hvor sit eget udviklet
            design manual med sit logodesign skulle indrages og fremvise sin
            kreativitet på template sitet.
            <div>
              {" "}
              <br></br>
            </div>
            <p className="pFarve">
              HTML | CSS | BOOTSTRAP | JAVASCRIPT | LOGODESIGN
            </p>
            <NavLink to="/Projekt-portfolio">
              <button className="button3">Læs mere</button>
            </NavLink>
          </p>
        </div>
        <div className="rightprojekt2">
          <div className="img-container2">
            <img src={opgavepf} className="img2" alt="Profil billede" />
          </div>
        </div>
      </div>
      <div className="projekt1">
        <div className="rightprojekt1">
          <div className="img-container1">
            <img src={Biomega} className="img1" alt="Profil billede" />
          </div>
        </div>
        <div className="leftprojekt1">
          <h2 className="projekt1Header">
            2. Semester content creation projekt
          </h2>
          <p>
            På mit 2. semester skulle jeg og mine andre medstuderende samarbejde
            med virksomheden Biomega, som har fokus på at designe cykler og
            skabe et bedre bæredygtigt verden. Herfra fik vi case opgaven og gav
            vores bud på omkring, hvordan man kunne forbedre virksomhedens
            content marketing og SEO på deres SoMe kanaler, nyhedsbrev og
            hjemmeside.
            <div>
              {" "}
              <br></br>
            </div>
            <p className="pFarve">ADOBE EXPRESS | SEO | KLAVIYO</p>
            <NavLink to="/Projekt-Biomega">
              <button className="button3">Læs mere</button>
            </NavLink>
          </p>
        </div>
      </div>
      <div className="projekt2">
        <div className="leftprojekt2">
          <h2 className="projekt2Header">1. Semester eksamensprojekt</h2>
          <p>
            På mit 1. semester eksamensprojekt har jeg samarbejdet med HGF
            gymnastik, som er en forening i Herning. Foreningen tilbyder
            adskillige hold, for både børn og voksne. Til projektet skulle jeg
            give et bud på et udviklet og redesignet digital løsning af deres
            hjemmeside, så den blev mere tidsvarende og tilpassede foreningens
            mål og ønsker.
            <div>
              {" "}
              <br></br>
            </div>
            <p className="pFarve">HTML | CSS | BOOTSTRAP</p>
            <NavLink to="/Projekt-HGF">
              <button className="button3">Læs mere</button>
            </NavLink>
          </p>
        </div>
        <div className="rightprojekt2">
          <div className="img-container2">
            <img src={Hgf} className="img2" alt="Profil billede" />
          </div>
        </div>
      </div>
    </section>
  );
}
