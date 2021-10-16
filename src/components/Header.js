import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { NavLink, link } from 'react-router-dom';
import '../css/Header.css';
Header.propTypes = {};

function Header(props) {
  return (
    <nav className="navbar">
      <h1>The Homies Blog</h1>
      <div className="links">
        <Link to="./HomePage"> Home</Link>
        <Link to="./Posts"> Posts</Link>
        <Link to="./Register" className="sign-in"> Register</Link>
        <Link to="./Login" className="Resgister"> Login</Link>
      </div>
    </nav>
  );
}

export default Header;
