import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation({ isLoggedIn, onLoginClick }) {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li>
          {" "}
          <Link to="/" className="navigation__home">
            Home
          </Link>{" "}
        </li>
        {isLoggedIn ? (
          <li>
            <button>Sign Out</button>
          </li>
        ) : (
          <li>
            <button onClick={onLoginClick} className="navigation__signIn">
              Sign In
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
