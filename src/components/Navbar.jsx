import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import chitoInc from "../assets/chitoinc.png";
import { AuthContext } from "../context/LoginRegister";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoggedIn } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={chitoInc} alt="" />
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isOpen ? "navbar-links active" : "navbar-links"}>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/categories" onClick={toggleMenu}>
              Categories
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={toggleMenu}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={toggleMenu}>
              {isLoggedIn ? <span>Logout</span> : "Login"}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
// hacer que se actualice en la pag login y navbar
