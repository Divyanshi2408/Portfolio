import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"; // Ensure HomePage is correctly imported
import AboutPage from "./pages/AboutPage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hello" element={<HomePage />} /> 
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact-me" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
