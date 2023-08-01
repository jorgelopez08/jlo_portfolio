import React from "react";
import me from "../static/me.png";

export default function About() {
  return (
    <div>
      <section id="start" className="flex items-center justify-center">
        <div className="flex w-8/12 mt-28">
          <div className="text-left text-xl">
            <h1 className="text-3xl font-semibold mb-5">
              Hello! <br />
              My name is Jorge López and I'm a software engineer intern at
              Oracle.
            </h1>
            <p>
              My first tech projects started back in 2013 with vanilla HTML and
              CSS websites, fast forward to today, I've learned great
              technologies that helped me to be a great developer and create
              great projects.
              <br />
              Actually I'm working with Python and Django to create an API for a
              crypto network.
            </p>
            <p>These is the tech stack I've been working with:</p>
            <div className="flex my-5 font-semibold">
              <div className="mr-20 ml-20">
                <p>• Java</p>
                <p>• Python</p>
                <p>• Docker</p>
                <p>• PostgreSQL</p>
                <p>• JavaScript</p>
              </div>
              <div className="ml-20">
                <p>• React</p>
                <p>• Django</p>
                <p>• MongoDB</p>
                <p>• FastAPI</p>
              </div>
            </div>
            <p className="text-lg">Also learning new things (DevOps & React)</p>
          </div>
          <div className="w-4/5">
            <img src={me} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
