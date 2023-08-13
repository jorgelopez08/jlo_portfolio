import React from "react";
import me from "../static/me.png";

export default function About() {
  return (
    <div>
      <section id="start" className="flex items-center justify-center">
        <div className="flex flex-col items-center md:flex-row w-10/12 lg:w-8/12 mt-8 lg:mt-28">
          <div className="text-center order-last md:text-left md:order-first">
            <h1 className="text-xl lg:text-3xl font-semibold mb-5">
              Hello! <br />
              My name is Jorge López and I'm a software engineer intern at
              Oracle.
            </h1>
            <p className="text-base lg:text-xl">
              My first tech projects started back in 2013 with vanilla HTML and
              CSS websites, fast forward to today, I've learned great
              technologies that helped me to be a great developer and create
              great projects.
              <br />
              Actually I'm working with Python and Django to create an API for a
              crypto network.
            </p>
            <p>These is the tech stack I've been working with:</p>
            <div className="flex my-5 md:text-base font-semibold justify-center">
              <div className="mr-5 ml-5 md:mr-20 md:ml-20">
                <p>• Java</p>
                <p>• Python</p>
                <p>• Docker</p>
                <p>• PostgreSQL</p>
                <p>• JavaScript</p>
              </div>
              <div className="ml-5 md:ml-20">
                <p>• React</p>
                <p>• Django</p>
                <p>• MongoDB</p>
                <p>• FastAPI</p>
              </div>
            </div>
            <p className="text-sm lg:text-xl">
              Also learning new things (DevOps & React)
            </p>
          </div>
          <div className="w-4/12 md:w-4/5">
            <img src={me} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
