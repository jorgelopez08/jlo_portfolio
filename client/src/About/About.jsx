import React from "react";
import "./About.css";
import me from "../static/me.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <h1>1.About me</h1>
      </div>
      <div className="about-content">
        <div className="about-text">
          <p>Hello, my name is Jorge López and I'm a software engineer.</p>
          <p>
            I like to create things for the web, my first tech projects started
            back in 2013 with vanilla HTML and CSS websites.
          </p>
          <p>
            Fast forward to today, I've learned great technologies that helped
            me to be a great developer and create great projects. My main focus
            right now is to create high performance websites & API's.
          </p>
          <p>
            Actually I'm working with Python and Django to create an API for a
            crypto network.
          </p>
          <p>These are the tech stack I've been working with:</p>
          <div className="about-stack">
            <div className="about-stack-left">
              <p>• Python</p>
              <p>• JavaScript</p>
              <p>• PostgreSQL</p>
              <p>• React</p>
            </div>
            <div className="about-stack-right">
              <p>• FastAPI</p>
              <p>• Django</p>
              <p>• MongoDB</p>
              <p>• Docker</p>
            </div>
          </div>
        </div>
        <div className="about-img">
          <img src={me} alt="" />
        </div>
      </div>
    </section>
  );
}
