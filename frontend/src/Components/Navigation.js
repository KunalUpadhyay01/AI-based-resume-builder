import React from "react";
import { Link } from "react-router-dom";
function Navigation(navigation) {
  return (
    <div className="navigation">
      <div className="logo"></div>
      <div className="navlist">
        <ul>
          <li>
            <Link to="/" className="listItems">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="listItems">
              About
            </Link>
          </li>
          <li>
            <Link to="/register" className="button">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;