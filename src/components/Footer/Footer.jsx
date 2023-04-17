import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md- col-sm-">
            <h3>Navegaci&oacute;n</h3>
            <div>
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
            <div>
              <img
                src="/public/logo-oca.png"
                alt="logo Oca"
                className="img-fluid"
              />
              <img
                src="/public/correo-argentino.png"
                alt="Logo Correo Argentino"
                className="img-fluid"
              />
              <img
                src="/public/andreani-logo.png"
                alt="Logo Andreani"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md- col-sm-">
            <h3>Contacto</h3>
            <div></div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md- col-sm-">
            <h3>Redes Sociales</h3>
            <div>
              <h4>Te invitamos a seguirnos en nuestras redes!</h4>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
