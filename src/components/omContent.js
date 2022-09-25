import "./Om.css";
import React from "react";
import { NavLink } from "react-router-dom";
import profil from "../Assets/profil-billede-nadia.JPG";
import { BsPatchCheckFill } from "react-icons/bs";

export default function OmContent() {
  return (
    <div className="om">
      <div className="leftOm">
        <h1 className="OmHeader">Om Mig</h1>
        <p>
          Mit navn er Nadia Anjum og jeg er 20 år gammel. Jeg er bosat i Århus
          og på nuværende tidspunkt studerer jeg på Erhvervsakademi Århus, som
          multimediedesigner med fokus på frontend. Jeg har tidligere studeret
          på Erhvervsakademi MidtVest.
          <div>
            {" "}
            <br></br>
          </div>
          Jeg opfatter mig selv som en{" "}
          <b style={{ color: "#533875" }}>observerende</b>,{" "}
          <b style={{ color: "#533875" }}>målrettet</b>,
          <b style={{ color: "#533875" }}> fokuseret</b> og{" "}
          <b style={{ color: "#533875" }}>hjælpsom</b> person. Jeg er en der
          både kan arbejde individuelt og i et team. Det man også kan forvente
          fra mig af er, at jeg er en lytter, der har en god planlægnings
          skills, en der kan multitaske, som også kan arbejde under stress
          roligt og som fokuser på at nå det endelig mål.{" "}
          <div>
            {" "}
            <br></br>
          </div>
          Min drøm er at blive en frontend udvikler, som også har en god
          forståelse for ux og ui design. At kunne arbejde med en kombination
          mellem design og programmering er det der får mig til at nyde det jeg
          laver.
        </p>
        <NavLink to="/Kontakt">
          <button className="buttonOm">Kontakt mig</button>
        </NavLink>
      </div>
      <div className="rightOm">
        <div className="img-container">
          <img src={profil} className="img" alt="Profil billede" />
        </div>
      </div>
      <div>
        {" "}
        <br></br>
      </div>
      <div className="skills1">
        <h2 style={{ marginBottom: "1rem" }}>Mine skills</h2>
        <h3 style={{ marginBottom: "1rem" }}>
          Her er mine skills indenfor frontend og design/content
        </h3>
      </div>

      <div className="container2 experience__container">
        <div className="experience__frontend">
          <h3>Frontend udvikling</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Dygtig</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Dygtig</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Mellemliggende</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Nybegynder</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Dygtig</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Nybegynder</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>WORDPRESS</h4>
                <small className="text-light">Dygtig</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__design">
          <h3>Design/content</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ADOBE XD</h4>
                <small className="text-light">Dygtig</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>FIGMA</h4>
                <small className="text-light">Mellemliggende</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ILLUSTRATOR</h4>
                <small className="text-light">Mellemliggende/dygtig</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHOTOSHOP</h4>
                <small className="text-light">Mellemliggende</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>INDESIGN</h4>
                <small className="text-light">Mellemliggende</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>EXPRESS</h4>
                <small className="text-light">Dygtig</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>KLAVIYO</h4>
                <small className="text-light">Dygtig</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GOOGLE ANALYT.</h4>
                <small className="text-light">Mellemliggende/dygtig</small>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div>
        <br></br>
      </div>
    </div>
  );
}
