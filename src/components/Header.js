import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, link } from "react-router-dom";
import "../css/Header.css";
import route from "../constant/routes";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";

Header.propTypes = {};

function Header(props) {
  const dispatch = useDispatch();
  //onchange get value option
  const onchange = (e) => {
    props.parenCallBack(e.target.value);
  };
  const { listCategories } = props;
  return (
    <nav className="navbar">
      <h1>The Homies Blog</h1>
      {listCategories ? (
        <select
          onChange={(e) => onchange(e)}
          className="px-3 ml-4 py-2 text-base font-medium text-white bg-pink-500 rounded-md appearance-none hover:bg-pink-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <option>Categories</option>
          {listCategories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      ) : (
        <div>hihi</div>
      )}

      <div className="links">
        <Link to={route.homepage}>Home</Link>
        <a href="/Posts.js">Posts</a>
        <a href="/Register.js" className="sign-in">
          Sign in
        </a>
        <a href="/sign-in" className="Resgister">
          Register
        </a>
      </div>
    </nav>
  );
}

export default Header;
