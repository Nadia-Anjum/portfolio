import { NavLink } from "react-router-dom";
import Logo from "../Assets/lille-logo2-nadia.svg";
import "./Navbar.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <NavLink to="/" end>
          {" "}
          <img src={Logo} className="logo" alt="Nadia's logo"></img>
        </NavLink>
      </div>

      <NavLink to="/" end>
        {" "}
        Forside
      </NavLink>
      <NavLink to="/Om-mig">Om mig</NavLink>
      <NavLink to="/Projekter">Projekter</NavLink>

      <NavLink to="/Kontakt">Kontakt</NavLink>
    </nav>
  );
}
