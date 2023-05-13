import { useCartContext } from "../../context/CartContext";
import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import CartCheckout from "../CartCheckout/CartCheckout";
import CartEmpty from "../CartEmpty/CartEmpty";

const CartContainer = () => {
  const { carritoLista, borrarProducto, borrarCantidad } = useCartContext();

  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    setEmpty(carritoLista.length === 0);
  }, [carritoLista]);

  return (
    <>
      {!empty ? (
        <div className="container w-75" key="cart-container">
          {carritoLista.map((prod) => (
            <CartItem
              key={prod.id}
              prod={prod}
              borrarCantidad={borrarCantidad}
              borrarProducto={borrarProducto}
            />
          ))}
          <CartCheckout />
        </div>
      ) : (
        <>
          <CartEmpty />
        </>
      )}
    </>
  );
};

export default CartContainer;
