import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { ProductsContext } from "../context/FetchContext";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import "./ProductDetails.css";
import addIcon from "../assets/add.png";

export const ProductDetails = () => {
  const { collections, loading, error } = useContext(ProductsContext);
  const dispatch = useDispatch();
  const { itemId } = useParams();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const product = collections.find((item) => item.item_id === parseInt(itemId));
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>Precio: ${product.price}</p>
      <p className="product-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nulla,
        excepturi dicta numquam deleniti temporibus pariatur.
      </p>
      <button className="add-to-cart" onClick={handleAddToCart}>
        <span> Add to cart</span> <img src={addIcon} alt="Agregar al carrito" />
      </button>
    </div>
  );
};
