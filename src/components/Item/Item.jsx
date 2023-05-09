import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ id, imagen, nombre, plataforma, precio }) => {
  return (
    <div className="card">
      <Link to={`/detalle/${id}`}>
        <img src={imagen} className="card-img-top img-fluid" alt="Card-img" />
      </Link>
      <div className="card-body">
        <h5 className="card-title card-title-modify">{nombre}</h5>
        {/*<h6 className="card-subtitle">
          <span className="badge bg-secondary">{plataforma}</span>
        </h6>
        <p className="card-text">{precio} Ars.</p> */}
        <div className="text-center">
          <Link to={`/detalle/${id}`}>
            <button type="button" className="itemBuyButton text-center">
              <span className="span-button">+ Detalles</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
