import React from "react";
import PropTypes from "prop-types";
import { NavLink, link } from 'react-router-dom';
import '../css/Header.css';
Header.propTypes = {};

function Header(props) {
  return (
    <nav className="navbar">
      <h1>The Homies Blog</h1>
      <div className="links">
        <a href="./HomePage">Home</a>
        <a href="./Posts">Posts</a>
        <a href="./Register" className="sign-in">Sign in</a>
        <a href="./Login" className="Resgister">Register</a>
      </div>
    </nav>
  );
}

export default Header;
