import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Projects } from './pages/Projects';
import{Resume} from './pages/Resume';
import Contact from './pages/Contact';
import './index.css'; 
 // Component names should start with a capital letter
// import{  Aboutme}  from './components/Aboutme';

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
        {/* <Route path="/" element={< Aboutme />} />  */}

      </Routes>
    </>
  );
}

export default App;




