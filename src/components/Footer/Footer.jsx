import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookSquare,
  FaEnvelope, FaMapMarker
} from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="contacto">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md- col-sm-">
            <h3>Navegaci&oacute;n</h3>
            <div className="row">
              <a href="#home" className="footer-link">
                Home
              </a>
              <a href="#productos" className="footer-link">
                Productos
              </a>
              <a href="" className="footer-link">
                Contactanos
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md- col-sm-">
            <h3>Formas de Envio</h3>
            <div className="footer-logos">
              <div className="row prueba">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <img
                    src="/public/logo-oca.png"
                    alt="logo Oca"
                    className="img-fluid footer-logos-envio"
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <img
                    src="/public/correo-argentino.png"
                    alt="Logo Correo Argentino"
                    className="img-fluid footer-logos-envio"
                  />
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <img
                    src="/public/andreani-logo.png"
                    alt="Logo Andreani"
                    className="img-fluid footer-logos-envio"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md- col-sm-">
            <h3>Contacto</h3>
            <div>
              <FaWhatsapp />
              <FaEnvelope />
              <FaMapMarker/>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md- col-sm-">
            <h3>Redes Sociales</h3>
            <div>
              <h4>Te invitamos a seguirnos en nuestras redes!</h4>
              <FaInstagram />
              <FaFacebookSquare />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
