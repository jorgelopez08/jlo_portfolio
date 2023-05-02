import React from "react";
import "./Navbar.css";
import logo from "../static/JL.gif";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="/">
        <img src={logo} alt="JLO logo" />
        </a>
        
      </div>
      <div className="nav-text">
        <a href="#about">1.About</a>
        <a href="#jobs">2.Experience</a>
        <a href="#projects">3.Work</a>
        <a href="#contact">4.Contact</a>
      </div>
    </nav>
  );
}
