import React from "react";
import "./Projects.css";
import SS from "../static/Screen Shot 2022-01-19 at 22.31.50.png";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        <h1>3.Projects</h1>
      </div>
      <div className="projects-content">
        <div className="project-left">
          <div className="project-text">
            <h1>Hello</h1>
            <p>Project description</p>
          </div>
          <div className="project">
            <img src={SS} alt="project img" />
          </div>
        </div>
        <div className="project project-right">
          <div className="project">
            <img src={SS} alt="project img" />
          </div>
          <div className="project-text">
            <h1>Hello</h1>
            <p>Project description</p>
          </div>
        </div>
        <div className="project project-left">
          <div className="project-text">
            <h1>Hello</h1>
            <p>Project description</p>
          </div>
          <div className="project">
            <img src={SS} alt="project img" />
          </div>
        </div>
      </div>
    </section>
  );
}
