import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import MyNavbar from './Navbar/Navbar';
import About from './About/About';
import Work from './Work/Work';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Error404 from './Error/Error404';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        < MyNavbar />
        <Routes>
          <Route path="/" element={< About />} />
          <Route path="/xp" element={< Work />} />
          <Route path="/projects" element={< Projects />} />
          <Route path="/contact" element={< Contact />} />
          <Route path="*" element={< Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
