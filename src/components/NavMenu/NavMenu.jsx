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
            <NavLink to="/plataforma/ps4">PS4</NavLink>
            <NavLink to="/plataforma/ps5">PS5</NavLink>
            <NavLink to="/plataforma/nintendo switch">Nintendo Switch</NavLink>
            <NavLink to="/plataforma/xbox">Xbox</NavLink>
            <NavLink to="/plataforma/pc">PC</NavLink>
            <Link>Contactanos</Link>
          </Nav>
          <CartWidget />
          <Nav>
            <Link href="#deets"></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
