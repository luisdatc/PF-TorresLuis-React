import "./Item.scss";

const Item = ({ id, imagen, nombre, plataforma, precio }) => {
  return (
    <div className="card">
      <img src={imagen} className="card-img-top" alt="Card-img" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6 className="card-subtitle">
          <span className="badge bg-secondary">{plataforma}</span>
        </h6>
        <p className="card-text">{precio} Ars.</p>
        <button type="button" className="btn btn-primary">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Item;
