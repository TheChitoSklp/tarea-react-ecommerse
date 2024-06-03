import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, clearCart } from "../redux/actions/cartActions";
import { AuthContext } from "../context/LoginRegister";
import "./Cart.css";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = () => {
    if (isLoggedIn) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        dispatch(clearCart());
      }, 3000);
    } else {
      navigate("/login");
    }
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  if (cartItems.length === 0)
    return (
      <div className="empty-cart-container">
        <div className="empty-cart">Add products to cart</div>
      </div>
    );

  return (
    <div className="cart-container">
      {showSuccess && (
        <div className="success-card">
          <p>Compra realizada con éxito</p>
        </div>
      )}
      <h2>Carrito de Compras</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.item_id}>
          <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => dispatch(removeFromCart(item.item_id))}>
              Eliminar
            </button>
          </div>
        </div>
      ))}
      <div className="total-price">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <button onClick={handleCheckout} className="checkout-button">
        Pagar
      </button>
    </div>
  );
};
