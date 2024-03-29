
import './App.css'
import React from "react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Projects } from './pages/Projects';
import{Resume} from './pages/Resume';
import Contact from './pages/Contact';
import {Aboutme} from './pages/Aboutme';
import Footer from './pages/Footer';
import './index.css'; 


import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> ;
        <Route path="/Projects" element={<Projects />} /> ;
        <Route path="/Resume" element={<Resume />} /> ;
        <Route path="/Contactme" element={<Contact />} /> ;
        <Route path="/Aboutme" element={< Aboutme />} /> 

      </Routes>
      <Footer/>
    </>
  );
}

export default App;




