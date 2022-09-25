import React from "react";
import "./Projekt-Styleanh.css";
import { NavLink } from "react-router-dom";
import Anh2 from "../Assets/anh-content.png";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

export default function ProjektANH() {
  const [post, setPost] = useState({});
  const params = useParams();
  console.log(params);
  const slug = params.slug;

  useEffect(() => {
    async function getPost() {
      const url = `https://portfolio.nadiaanjum.dk/wp-json/wp/v2/posts`;
      const response = await fetch(url);
      const data = await response.json();
      setPost(data[0]);
    }
    getPost();
  }, [slug]);

  return (
    <section>
      <h1 className="portfolioHeader">
        {post.title && parse(post.title.rendered)}
      </h1>

      <div className="projektanh">
        <div className="rightprojektanh">
          <div className="img-containeranh">
            <img src={Anh2} className="imganh" alt="Profil billede" />
          </div>
        </div>

        <div className="leftprojektanh">
          <h2 className="projektanhUnderHeader">Beskrivelse</h2>
          <p>
            Til mit 2. semester eksamensprojekt samarbejdet jeg og to af mine
            medstuderende med virksomheden A New Hope. Projektet omhandlede, at
            der skulle redesignes for ANH's hjemmeside, så den blev mere
            tidssvarende og havde et større fokus på brugeroplevelsen. Dette
            fulgte også med på SoMe.
            <div>
              <br></br>
            </div>
            Da foreningen fulgte disse keywords: Fællesskab, leg og personlig
            udvikling, var det de begreber som vi tydliggjorde på hjemmeisden.
            Selve hjemmesiden blev udarbejdet på Wordpress ved hjælp af plugins
            såsom Elementor og flere for SEO, for at det kunne forbedres. Noget
            CSS eksternt blev også lavet. Content budene for SoMe og nyhedbrevet
            blev udarbejdet på Adobe express og Klavyio, hvor de fulgte content
            teorier såsom virkemidler, persuasive strategier, stepps m.m og en
            indholdsplan. Der blev også udarbejdet en designmanual for
            foreningen.
          </p>
          <h3 className="projektanhUnderHeader">Detaljer</h3>
          <a
            style={{ color: "#533875" }}
            href="https://a-new-hope.nadiaanjum.dk/"
            className="emailPf"
          >
            {" "}
            <p>Link til hjemmesiden</p>
          </a>

          <p>Udarbejdet på Erhvervsakademi MidtVest Herning - 2. semester</p>
          <p>Dato: 25. Maj 2022</p>
          <NavLink to="/Projekter">
            <button className="button3">Se flere projekter</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
