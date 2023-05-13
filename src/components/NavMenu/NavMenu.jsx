import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light">
      <Container fluid>
        <Link to="/">
          <img
            alt=""
            src="/LOGO1.png"
            className="d-inline-block align-top navbar-logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Nav.Link href="#productos" className="nav-links p-0">
              Productos
            </Nav.Link>
            <Nav.Link href="#contacto" className="nav-links p-0">
              Contacto
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
