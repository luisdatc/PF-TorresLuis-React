import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useEffect, useState } from "react";
import { FaTrashAlt, FaMinus } from "react-icons/fa";

import "./CartContainer.scss";

const CartContainer = () => {
  const { cartList, vaciarCarrito, deleteProd, totalCarrito, deleteCantidad } =
    useCartContext();

  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    setEmpty(cartList.length === 0);
  }, [cartList]);

  return (
    <>
      {!empty ? (
        <div className="container w-75" key="cart-container">
          {cartList.map((prod) => (
            <div className="row cartContainer" key={prod.id}>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div className="cart-flex-1 d-flex">
                  <img
                    src={prod.imagen}
                    alt=""
                    className="img-fluid img-width"
                  />
                  <div className="cartContainer-description ps-3">
                    <h2>{prod.nombre}</h2>
                    <h4>
                      <span className="badge bg-success">
                        {prod.plataforma}
                      </span>
                    </h4>
                    <div className="cartContainer-quantity">
                      <h4>Cantidad seleccionada: {prod.cantidad}</h4>
                      <h5 className="cartContainer-deleteQuantity">
                        Eliminar unidad:
                        <button
                          onClick={() => deleteCantidad(prod.id)}
                          className="cartContainer-deleteQuantity-button"
                        >
                          <FaMinus />
                        </button>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="cart-flex"></div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 cartContainer-price-button">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-center mx-auto">
                    <h5 className="cartContainer-price">
                      {prod.precio} $RS C/U
                    </h5>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 text-end">
                    <button
                      onClick={() => deleteProd(prod.id)}
                      className="cartContainer-trash"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <h2>total compra: {totalCarrito()}</h2>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <Link to="/">
                <button>seguir comprando</button>
              </Link>
              <Link to="/checkout">
                <button>Finalizar</button>
              </Link>
            </div>
          </div>
          <div>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-empty-img text-center mt-5">
            <Link to="/">
              <img src="/logo2.png" alt="" className="img-fluid" />
            </Link>
          </div>
          <div className="text-center mt-3 mb-5">
            <p>
              El carrito de compras esta vacio, si quieres agregar algun
              producto de nuestro catalogo presiona <Link to="/">AQUI</Link>!
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default CartContainer;
