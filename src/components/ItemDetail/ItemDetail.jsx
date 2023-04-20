import "./ItemDetail.scss";

const ItemDetail = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-10 col-sm-8 mx-auto">
          <div className="card-detail">
            <div className="card-detail-img">
              <img
                src="/public/stock/ps4/avengers.jpg"
                alt=""
                className="img-fluid rounded-start"
              />
            </div>
            <div className="card-detail-body">
              <h4 className="card-detail-title">nombre</h4>
              <span className="badge bg-secondary">plataforma</span>
              <span className="badge bg-secondary">lanzamiento</span>
              <span className="badge bg-secondary">genero</span>
              <p className="card-detail-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in
                quae, unde tempore consequatur est dolorem ab placeat dolore
                nemo quae, unde tempore consequatur est dolorem ab placeat
                dolore nemo.
              </p>
              <h4>precio ars</h4>
              <div className="buttons">
                <button>agregar al carro</button>
                <button>contador</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    /* 
    <div className="card-detail">
      <div className="card-detail-img">
        <img
          src="/public/stock/ps4/avengers.jpg"
          alt=""
          className="img-fluid rounded-start"
        />
      </div>
      <div className="card-detail-body">
        <h4 className="card-detail-title">nombre</h4>
        <span className="badge bg-secondary">plataforma</span>
        <span className="badge bg-secondary">lanzamiento</span>
        <span className="badge bg-secondary">genero</span>
        <p className="card-detail-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in quae,
          unde tempore consequatur est dolorem ab placeat dolore nemo quae, unde
          tempore consequatur est dolorem ab placeat dolore nemo.
        </p>
        <h4>precio ars</h4>
        <button>agregar al carro</button>
        <button>contador</button>
      </div>
    </div> */
  );
};

export default ItemDetail;
