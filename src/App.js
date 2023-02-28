import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import Home from './pages/Home';
 // Component names should start with a capital letter
// import{  Aboutme}  from './components/Aboutme';

import { Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> ;
        {/* <Route path="/" element={< Aboutme />} />  */}

      </Routes>
    </>
  );
}

export default App;




