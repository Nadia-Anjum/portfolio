import forside1 from "../Pages/domenico-loia-hGV2TfOh0ns-unsplash1-kopi.jpg";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaRegListAlt,
  FaRegEdit,
  FaLaptopCode,
  FaRegObjectGroup,
  FaPencilAlt,
} from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

export default function Forside() {
  return (
    <section>
      <img src={forside1} className="ForsideImg" alt="forsidebillede" />
      <div className="hero-image">
        <div className="hero-text">
          <div className="ForsideHeader">
            <h1>Nadia Anjum</h1>
            <p className="typewriter">
              Multimediedesigner og frontend udvikler
            </p>
            <div className="RykbuttonForside">
              <NavLink to="/Projekter">
                <button className="button">Se Projekter</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <section className="sneakpeak">
        <h4>
          Jeg er Nadia Anjum og velkommen til min portfolio. Jeg er på nuværende
          tidspunkt igang med at uddanne mig som multimediedesigner, da jeg
          nyder at udforske mig i at arbejde med design og programmering.{" "}
        </h4>
        <NavLink to="/Om-mig">
          <button className="button2">Lidt mere om mig</button>
        </NavLink>
      </section>
      <div>
        <br></br>
      </div>
      <section className="kompetencer">
        <div>
          <br></br>
        </div>
        <h2> Mine kompetencer</h2>
        <div className="grid-container">
          <div className="item1">
            <div className="Iconlaptop">
              <FaLaptopCode
                size={40}
                style={{
                  color: "000",
                  marginBottom: "-1rem",
                }}
              />
            </div>
            <h4>Frontend Udvikling</h4>
            <p>
              En af mine større kompetencer ligger ved kodningen, hvor det især
              er frontend. At kunne udvikle digitale produkter ved brug af de
              genkendelige programmeringssprog fra frontend til at fremvise det
              kreative look på internettet, er en af de sager jeg kan arbejde
              med.
            </p>
          </div>
          <div className="item2">
            <div className="Iconobj">
              <FaRegObjectGroup
                size={40}
                style={{
                  color: "000",
                  marginBottom: "-1rem",
                }}
              />
            </div>
            <h4>UX Design</h4>
            <p>
              At kunne skabe bedre brugervenlige brugeroplevelse med godt
              research på et eller flere IT-løsninger og at fokuserer på
              styrring og analysen gennem hele processen fra ide til levering
              med forståelse for brugernes behov, er en af de kompetencer jeg
              har ved UX.{" "}
            </p>
          </div>
          <div className="item3">
            <div className="Iconedit">
              <FaRegEdit
                size={40}
                style={{
                  color: "000",
                  marginBottom: "-1rem",
                }}
              />
            </div>
            <h4>UI Design</h4>
            <p>
              Indenfor det grafiske brugergrænseoverflade, kan jeg designe det
              visuelle kvalitet til produktet med en god forståelse for
              designprincipperne og teorierne. Her kan jeg gøre det på alle
              digitale enheder og skærmtyper.{" "}
            </p>
          </div>
          <div className="item4">
            <div className="Iconbrush">
              <FaPencilAlt
                size={40}
                style={{
                  color: "000",
                  marginBottom: "-1rem",
                }}
              />
            </div>
            <h4>Logo Design</h4>
            <p>
              At udvikle visuelle identiteter, der kan fange opmærksomheden,
              være mindeværdige, kan skabe adkillelse ved konkurrence og gøre
              sig unik og tydeliggøre brandidentitet, er en af de kompetencer
              jeg har ved logo design.{" "}
            </p>
          </div>
          <div className="item5">
            <div className="Iconglobe">
              <BsGlobe
                size={40}
                style={{
                  color: "000",
                  marginBottom: "-1rem",
                }}
              />
            </div>
            <h4>Multimediedesign</h4>
            <p>
              Gennem min uddannelse som multimediedesigner har jeg fået
              kompetencer i at kunne gå fra ideudvikling til et færdigt produkt.
              At designe og udvikle webløsninger, digitale brugeroplevelser,
              indholdsproduktion til digitale medier og have en god
              forretningsforståelse.{" "}
            </p>
          </div>
          <div className="item6">
            <div className="Iconlist">
              <FaRegListAlt
                size={40}
                style={{
                  color: "000",
                  marginBottom: "-1rem",
                }}
              />
            </div>
            <h4>Content Creation</h4>
            <p>
              At skabe indholdsproduktion til digitale medier med fokus på
              content/brand marketing, organisk trafik, at formidle et budskab
              gennem det visuelle kommunikation og lave en indholdstrategi plan,
              er en af de kompetencer jeg har for dette adspekt.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="kontaktmig">
        <h2>Kontakt mig</h2>
        <p>
          {" "}
          Er du interesseret eller har et spørgsmål, så er du velkommen til at
          sende mig en besked.
        </p>
        <div>
          <NavLink to="/Kontakt">
            <button className="buttonkon">Kontakt her</button>
          </NavLink>
        </div>
      </section>
    </section>
  );
}
