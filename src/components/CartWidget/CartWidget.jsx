import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.scss";

const CartWidget = () => {
  return (
    <div className="cart">
      <span className="cart-counter">1</span>
      <button className="cart-button">
        <FaShoppingCart className="cart-button-icon" />
      </button>
    </div>
  );
};

export default CartWidget;
