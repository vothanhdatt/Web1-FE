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
        <a href="../features/HomePage.js">Home</a>
        <a href="/Posts.js">Posts</a>
        <a href="/Register.js" className="sign-in">Sign in</a>
        <a href="/sign-in" className="Resgister">Register</a>
      </div>
    </nav>
  );
}

export default Header;
