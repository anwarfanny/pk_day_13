import React from "react";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <nav className="navbr navbar-expanded-lg navbar-light bg-primary">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="navbarSupportedContent"
          aria-control="navbarSupprotContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="coallapse navbar-collapse" id="navbarSupportContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="selected" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to="/student"
              >
                Student
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="selected"
                to="/api"
              >
                API
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
