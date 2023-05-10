import { useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import PlatformIcon from "../PlatformIcon/PlatformIcon";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.scss";

const ItemDetail = ({ producto }) => {
  const [isCant, setIsCant] = useState(false);
  const { addToCart, cartList } = useCartContext();

  const onAdd = (cantidad) => {
    addToCart({ ...producto, cantidad });
    setIsCant(true);
  };

  useEffect(() => {
    const productoEnCarrito = cartList.find((prod) => prod.id === producto.id);
    if (productoEnCarrito && productoEnCarrito.cantidad >= 5) {
      setIsCant(true);
    }
  }, [cartList, producto]);

  return (
    <>
      <PlatformIcon />
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 mx-auto p-0">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src={producto.imagen}
                    alt=""
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title card-detail-name">
                      {producto.nombre}
                    </h5>
                    <span className="badge bg-success">
                      {producto.plataforma}
                    </span>
                    <span className="badge bg-warning">{producto.genero}</span>
                    <span className="badge bg-danger">
                      {producto.lanzamiento}
                    </span>
                    <p className="card-text">{producto.descripcion}</p>
                    <h5 className="card-title">
                      Precio: {producto.precio} $ARS
                    </h5>
                    <h5 className="card-title">
                      {!isCant ? (
                        <ItemCount stock={5} initial={1} onAdd={onAdd} />
                      ) : (
                        <div className="text-center mt-3">
                          <Link to="/carrito">
                            <button className="itemBuyButtonR">
                              <span>Terminar Compra</span>{" "}
                            </button>
                          </Link>
                          <Link to="/">
                            <button className="itemBuyButtonL">
                              <span>Seguir Comprando</span>{" "}
                            </button>
                          </Link>
                        </div>
                      )}
                    </h5>
                    <h6 className="pt-5">
                      * Recuerda: solo puedes agregar 5 unidades de este
                      articulo como maximo!
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
