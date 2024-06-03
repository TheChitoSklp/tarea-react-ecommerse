import React from "react";
import "./ProductCard.css";

export const ProductCard = ({ collections }) => {
  return (
    <div className="product-card">
      <img src={collections.imageUrl} alt={collections.name} />
      <h3>{collections.name}</h3>
      <p>${collections.price}</p>
    </div>
  );
};
