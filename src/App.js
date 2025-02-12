import React from "react";
import LandingPage from "./pages/LandingPage";
import Games from "./pages/GamesPage";
import About from "./pages/AboutPage";
import Careers from "./pages/CarrersPage";
import Contact from "./pages/ContactPage";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
