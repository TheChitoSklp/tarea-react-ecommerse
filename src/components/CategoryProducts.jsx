import React, { useContext } from "react";
import { ProductsContext } from "../context/FetchContext";
import { useParams } from "react-router-dom";
import addItem from "../assets/add.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import "./CategoryProducts.css";
export const CategoryProducts = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { loading, error, collections } = useContext(ProductsContext);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  const getCategoryProducts = (category) => {
    const capitalizedCategory = capitalizeFirstLetter(category);
    return collections.filter((product) => product.title === capitalizedCategory);
  };

  const products = getCategoryProducts(category);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="products-containerC">
      {products.map((product) => (
        <div className="product-cardC" key={product.item_id}>
          <img src={product.imageUrl} alt={product.name} className="product-imageC" />
          <h2 className="product-nameC">{product.name}</h2>
          <p className="product-priceC">${product.price}</p>
          <button className="button-addC" onClick={() => dispatch(addToCart(product))}>
            Add to cart <img src={addItem} alt="Add item" />
          </button>
        </div>
      ))}
    </div>
  );
};
