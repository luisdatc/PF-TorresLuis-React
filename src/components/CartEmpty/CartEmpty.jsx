import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <>
      <div className="cart-empty-img text-center mt-5">
        <Link to="/">
          <img src="/logo2.png" alt="" className="img-fluid" />
        </Link>
      </div>
      <div className="text-center mt-3 mb-5">
        <p>
          El carrito de compras esta vacio, si quieres agregar algun producto de
          nuestro catalogo presiona <Link to="/">AQUI</Link>!
        </p>
      </div>
    </>
  );
};

export default CartEmpty;
