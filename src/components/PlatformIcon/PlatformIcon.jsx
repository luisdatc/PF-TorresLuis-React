import { Link } from "react-router-dom";
import "./PlatformIcon.scss";

import React from "react";

const PlatformIcon = () => { //AGREGAR LO DE CUANDO ESTE ACTIVO CAMBIE EL FONDO
  return (
    <div className="container mt-2 mb-2" id="productos">
      <div className="row justify-content-center platform-icons">
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/ps4">
            <img src="/ps4-icon.png" alt="" className="img-fluid ps4-icon" />
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/ps5">
            <img src="/ps5-icon.png" alt="" className="img-fluid ps5-icon" />
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/nintendo switch">
            <img
              src="/switch-icon.png"
              alt=""
              className="img-fluid switch-icon"
            />
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/xbox">
            <img src="/xbox-icon.png" alt="" className="img-fluid xbox-icon" />
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/pc">
            <img src="/pc-icon.png" alt="" className="img-fluid pc-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlatformIcon;



/* <div className="container mt-2 mb-2">
  <div className="row justify-content-center">
    <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 ">
      <div className="row justify-content-center platform-icons">
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/ps4">
            <img src="/ps4-icon.png" alt="" className="img-fluid ps4-icon" />
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/ps5">
            <img src="ps5-icon.png" alt="" className="img-fluid ps5-icon" />
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/nintendo switch">
            <img
              src="switch-icon.png"
              alt=""
              className="img-fluid switch-icon"
            />
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/xbox">
            <img src="xbox-icon.png" alt="" className="img-fluid xbox-icon" />
          </Link>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
          <Link to="/plataforma/pc">
            <img src="pc-icon.png" alt="" className="img-fluid pc-icon" />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>; */