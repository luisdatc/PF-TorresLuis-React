import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <a href="">
          <img
            src="../src/assets/LOGO1.png"
            alt="Brand Logo"
            className="nav-brand-logo"
          />
        </a>
      </div>
      <ul className="nav-list">
        <li>
          <a className="nav-list-links" href="">
            Home
          </a>
        </li>
        <li>
          <a className="nav-list-links" href="">
            Productos
          </a>
        </li>
        <li>
          <a className="nav-list-links" href="">
            About Us
          </a>
        </li>
      </ul>
      <div className="nav-cart">
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
