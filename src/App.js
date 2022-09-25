import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Forside from "./Pages/Forside";
import Om from "./Pages/Om";
import Projekter from "./Pages/Projekter";
import Kontakt from "./Pages/Kontakt";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProjektANH from "./Pages/Projekt-anh";
import ProjektPF from "./Pages/Projekt-portfolio";
import ProjektHGF from "./Pages/Projekt-hgf";
import ProjektBiomega from "./Pages/Projekt-biomega";

function App() {
  return (
    <main>
      <NavBar />

      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/Om-mig" element={<Om />} />
        <Route path="/Projekter" element={<Projekter />} />
        <Route path="/Kontakt" element={<Kontakt />} />
        <Route path="/Projekt-ANH" element={<ProjektANH />} />
        <Route path="/Projekt-portfolio" element={<ProjektPF />} />
        <Route path="/Projekt-HGF" element={<ProjektHGF />} />
        <Route path="/Projekt-Biomega" element={<ProjektBiomega />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
