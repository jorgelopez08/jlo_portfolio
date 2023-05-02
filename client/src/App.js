import React from 'react';
import './App.css';
import MyNavbar from './Navbar/Navbar';
import Start from './Start/Start';
import About from './About/About';
import Work from './Work/Work';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Start />
      <About />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
