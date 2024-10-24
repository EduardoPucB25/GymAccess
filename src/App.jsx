import React from 'react'

// import { Layout, Home, About, Gallery } from "./components";

import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import { Routes, Route } from "react-router-dom";

function App() {
  // Botón de descarga en Layout
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="galeria" element={<Gallery />} />
        <Route path="acerca" element={<About/>} />
      </Routes>
    </Layout>
  );
}

export default App;