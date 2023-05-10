import { FaMinus, FaTrashAlt } from "react-icons/fa";


const CartItem = ({prod, deleteProd, deleteCantidad}) => {

  return (
    <div className="row cartContainer" key={prod.id}>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
        <div className="cart-flex-1 d-flex">
          <img src={prod.imagen} alt="" className="img-fluid img-width" />
          <div className="cartContainer-description ps-3">
            <h2>{prod.nombre}</h2>
            <h4>
              <span className="badge bg-success">{prod.plataforma}</span>
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
            <h5 className="cartContainer-price">{prod.precio} $RS C/U</h5>
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
  );
};

export default CartItem;
