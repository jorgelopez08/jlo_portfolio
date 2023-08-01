import React from "react";

import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";
import logo from "../static/JL.gif";

export default function Navbar1() {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">
          <a href="/">
            <img src={logo} alt="JLO logo" />
          </a>
        </div>
        <div className="nav-text">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/xp">Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

{
  /* <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a> */
}
