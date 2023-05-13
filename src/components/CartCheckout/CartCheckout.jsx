import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

import "./CartCheckout.scss";

const CartCheckout = () => {
  const { vaciarCarrito, totalCarrito } = useCartContext();

  return (
    <>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
          <h2>
            Total de la Compra:{" "}
            <strong className="cart-checkout-price">
              {totalCarrito()} $ARS
            </strong>
          </h2>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-end">
          <Link to="/">
            <button className="cartButton">Seguir Comprando</button>
          </Link>
          <Link to="/checkout">
            <button className="cartButton">Finalizar</button>
          </Link>
        </div>
      </div>
      <div className="text-center mt-4 mb-4">
        <button onClick={vaciarCarrito} className="cartButton">
          Vaciar Carrito
        </button>
      </div>
    </>
  );
};

export default CartCheckout;
