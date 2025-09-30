// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ColorShades from "./components/ColorShades/ColorShades";
import Calculator from "./components/Calculator/Calculator";
import GetQuota from "./components/GetQuota/GetQuota";

export default function App() {
  const [isQuotaOpen, setIsQuotaOpen] = useState(false);

  const openQuota = () => setIsQuotaOpen(true);
  const closeQuota = () => setIsQuotaOpen(false);

  return (
    <>
      <Navbar openQuota={openQuota} />
      <main style={{ paddingTop: 60 }}>
        <Routes>
          <Route path="/" element={<Home openQuota={openQuota} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/colorshades" element={<ColorShades />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer openQuota={openQuota} />

      {/* Modal is always available, shown only if open */}
      {isQuotaOpen && <GetQuota closeQuota={closeQuota} />}
    </>
  );
}
