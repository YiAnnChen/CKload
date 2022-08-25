import React, { Component }  from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

import VNavBar from '../VNavBar';



const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      {user ? (<VNavBar/>) : (null)}
      <span className="logo">
        <Link className="link" to="/">
          NCKUMeter
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem1">
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem2">{user.displayName}</li>
          <li className="listItem3" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="linklogin" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;