import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookSquare,
  FaEnvelope,
  FaMapMarker,
} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="contacto" className="footer text-center">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-4 d-none d-xl-block d-lg-block mt-2">
            <h3>Formas de Envio</h3>
            <div className="footer-logos">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <img
                  src="/public/logo-oca.png"
                  alt="logo Oca"
                  className="img-fluid"
                />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <img
                  src="/public/correo-argentino.png"
                  alt="Logo Correo Argentino"
                  className="img-fluid"
                />
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <img
                  src="/public/andreani-logo.png"
                  alt="Logo Andreani"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mt-2">
            <h3>Contacto</h3>
            <div className="footer-contacto-icons">
              <p>
                <FaWhatsapp className="footer-contacto-icons-ws" />
                +54 9 1178945655
              </p>
              <p>
                <FaEnvelope className="footer-contacto-icons-mail" />
                consultas@gamerzone.com.ar
              </p>
              <p>
                <FaMapMarker className="footer-contacto-icons-map" />
                Buenos Aires, Argentina
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6  mt-2">
            <h3>Redes Sociales</h3>
            <h5>Te invitamos a seguirnos en nuestras redes:</h5>
            <div className="footer-social-icons">
              <div className="footer-social-icons-instagram">
                <FaInstagram />
              </div>
              <div className="footer-social-icons-facebook">
                <FaFacebookSquare />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
