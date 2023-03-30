import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="">
          <img
            src="../src/assets/logo-wbg.png"
            alt="Brand Logo"
            className="logo-brand"
          />
        </a>
      </div>
      <div>
        <ul className="nav-list">
          <li>
            <a className="nav-links" href="">
              Home
            </a>
          </li>
          <li>
            <a className="nav-links" href="">
              Productos
            </a>
          </li>
          <li>
            <a className="nav-links" href="">
              About Us
            </a>
          </li>
        </ul>
      </div>
      <div className="cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
