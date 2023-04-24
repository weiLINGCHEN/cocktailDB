import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img className="logo" src={logo} alt="The CocktailDB Logo" />
        </Link>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
