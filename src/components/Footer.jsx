import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaShoppingCart, FaBoxOpen, FaSignInAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Footer.css";

import { AuthContext } from "../context/LoginRegister";

export const Footer = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  let timeoutId = null;

  const handleScroll = () => {
    clearTimeout(timeoutId);
    setVisible(true);
    timeoutId = setTimeout(() => {
      setVisible(false);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className={`footer-nav ${visible ? "visible" : ""}`}>
      <ul>
        <li>
          <Link to="/">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FaBoxOpen />
            <span>Products</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart />
            <span>Cart</span>
            {cartQuantity > 0 && <span className="cart-quantity">{cartQuantity}</span>}
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignInAlt />
            {isLoggedIn ? <span>Logout</span> : "Login"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
