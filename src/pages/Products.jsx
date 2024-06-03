import React, { useContext } from "react";
import { ProductsContext } from "../context/FetchContext";
import "./Products.css";
import addItem from "../assets/add.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

export const Products = () => {
  const dispatch = useDispatch();
  const { collections, loading, error } = useContext(ProductsContext);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="products-containers">
      {collections.map((collection) => (
        <div className="product-cards" key={collection.item_id}>
          <img
            src={collection.imageUrl}
            alt={collection.name}
            className="product-images"
          />
          <h2 className="product-names">{collection.name}</h2>
          <p className="product-prices">${collection.price}</p>
          <button className="button-add" onClick={() => dispatch(addToCart(collection))}>
            Add to cart <img src={addItem} alt={addItem} />
          </button>
        </div>
      ))}
    </div>
  );
};
