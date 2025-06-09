import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css"; // assuming your navbar CSS is here

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/weather">Weather Forecast</Link>
      </div>
    </nav>
  );
}
