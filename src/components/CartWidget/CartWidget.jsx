import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.scss";

const CartWidget = () => {
  return (
    <div className="cart">
      <div className="cart-div">
        <span className="cart-counter">1</span>
        <button className="cart-button">
          <FaShoppingCart className="cart-icon" />
        </button>
      </div>
    </div>
  );
};

export default CartWidget;
