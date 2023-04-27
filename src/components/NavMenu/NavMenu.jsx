import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "./NavMenu.scss";
import { Link, NavLink } from "react-router-dom";

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

            {/* <NavLink to="/plataforma/ps4" className="nav-links">
              PS4
            </NavLink>
            <NavLink to="/plataforma/ps5" className="nav-links">
              PS5
            </NavLink>
            <NavLink to="/plataforma/nintendo switch" className="nav-links">
              Nintendo Switch
            </NavLink>
            <NavLink to="/plataforma/xbox" className="nav-links">
              Xbox
            </NavLink>
            <NavLink to="/plataforma/pc" className="nav-links">
              PC
            </NavLink>
            <NavLink className="nav-links">Contactanos</NavLink> */}
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
