import { useEffect, useState } from "react";
import { getRandomItems } from "../utils/getRandomItem";
import { applyDiscount } from "../utils/applyDiscount";
import { Link } from "react-router-dom";
import "./Offer.css";

export const Offer = ({ collections }) => {
  const [discountedItems, setDiscountedItems] = useState([]);

  useEffect(() => {
    const items = getRandomItems(collections, 6);
    const itemsWithDiscount = items.map(applyDiscount);
    setDiscountedItems(itemsWithDiscount);
  }, [collections]);

  return (
    <div className="special-offers">
      <h1>Special Offers</h1>
      <div className="offers-grid">
        {discountedItems.map((item) => (
          <Link
            key={item.item_id}
            to={`/products/${item.item_id}`}
            className="offer-card"
          >
            <h2>{item.name}</h2>
            <img src={item.imageUrl} alt={item.name} />
            <p>
              Precio: <span className="rallita">${item.price}</span>
            </p>
            <p>Descuento: {item.discount}%</p>
            <p>Precio ahora: ${item.discountedPrice}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
