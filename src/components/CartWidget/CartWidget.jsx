import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import "./CartWidget.scss";

const CartWidget = () => {
  const { cantidadTotalEnCarrito } = useCartContext();

  return (
    <>
      <span className="cart-counter">{cantidadTotalEnCarrito()}</span>
      <Link to="/carrito">
        <button className="cart-button">
          <FaShoppingCart className="cart-button-icon" />
        </button>
      </Link>
    </>
  );
};

export default CartWidget;
