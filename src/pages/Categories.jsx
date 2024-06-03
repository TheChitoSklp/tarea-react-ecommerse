import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

export const Categories = () => {
  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to="/category/hats">Hats</Link>
        </li>
        <li>
          <Link to="/category/jackets">Jackets</Link>
        </li>
        <li>
          <Link to="/category/mens">Mens</Link>
        </li>
        <li>
          <Link to="/category/sneakers">Sneakers</Link>
        </li>
        <li>
          <Link to="/category/womens">Womens</Link>
        </li>
      </ul>
    </div>
  );
};
