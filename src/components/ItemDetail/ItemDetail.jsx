import PlatformIcon from "../PlatformIcon/PlatformIcon";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [isCant, setIsCant] = useState(false);

  const onAdd = (cantidad) => {
    console.log("cantidad agregada ", cantidad);//borrar
    setIsCant(true);
  };

  return (
    <>
      <PlatformIcon />
      <div className="container-fluid">
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
                        <>
                          <Link>Terminar Compra</Link>
                          <Link to="/">Seguir Comprando</Link>
                        </>
                      )}
                    </h5>
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
