import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import "./NavMenu.scss";

const NavMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="light">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/LOGO1.png"
            className="d-inline-block align-top navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown
              title="Juegos"
              id="navbarScrollingDropdown"
              href="#productos"
            >
              <NavDropdown.Item>PS4</NavDropdown.Item>
              <NavDropdown.Item>PS5</NavDropdown.Item>
              <NavDropdown.Item>NINTENDO SWITCH</NavDropdown.Item>
              <NavDropdown.Item>XBOX</NavDropdown.Item>
              <NavDropdown.Item>PC</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contactanos</Nav.Link>
          </Nav>
          <CartWidget />
          <Nav>
            <Nav.Link href="#deets"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
