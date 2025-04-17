import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Games from "./pages/GamesPage";
import About from "./pages/AboutPage";
import Careers from "./pages/CarrersPage";
import Contact from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BlogPosts from "./components/Blog/BlogPosts";
import BlogPost from "./components/Blog/BlogPost";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/blog" element={<BlogPosts />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;
