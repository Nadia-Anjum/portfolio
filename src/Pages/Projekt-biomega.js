import React from "react";
import "./Projekt-Stylebiomega.css";
import { NavLink } from "react-router-dom";
import Biomega1 from "../Assets/biomega-content.png";

export default function ProjektBiomega() {
  return (
    <section>
      <h1 className="portfolioHeader">Projekt Biomega</h1>
      <div className="projektbiomega">
        <div className="rightprojektbiomega">
          <div className="img-containerbiomega">
            <img src={Biomega1} className="imgbiomega" alt="3 bud på content" />
          </div>
        </div>

        <div className="leftprojektbiomega">
          <h2 className="projektbiomegaUnderHeader">Beskrivelse</h2>
          <p>
            På mit 2. semester skulle jeg og mine to medstuderende samarbejde
            med virksomheden Biomega. Projektet handlede om at give et bud på,
            hvordan man kunne forbedre virksomhedens content marketing og SEO på
            deres SoMe kanaler, nyhedsbrev og hjemmeside.
            <div>
              <br></br>
            </div>
            Til det kom vi med et bud på indholdseksempler baseret på snack
            content og virksomhedens værdiord. Fokuset lå på at contentet skulle
            underholde brugerne, men også give dem mere viden omkring det
            virksomheden tilbød. Det samme var for de udviklet email templates
            og flows for biomega's nyhedsbrev, for at det også kunne tiltrække
            flere brugere/medlemmer. Derfra udarbejdet vi en content plan, som
            skulle hjælpe Biomega med at strukturer content ideerne, så det var
            lettere at følge og havde et klar og konsistent budskab på arbejdet.
            For SEO blev der lavet en SEO tekst baseret på 3 af biomega's
            kernebegreber til hjemmesiden.
          </p>
          <h3 className="projektbiomegaUnderHeader">Detaljer</h3>

          <p>Udarbejdet på Erhvervsakademi MidtVest Herning - 2. semester</p>
          <p>Dato: 28. April 2022</p>
          <NavLink to="/Projekter">
            <button className="button3">Se flere projekter</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
