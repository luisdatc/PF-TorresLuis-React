import { useCartContext } from "../../context/CartContext";
import { useEffect, useState } from "react";
import CartItem from "../CartItem/CartItem";
import CartCheckout from "../CartCheckout/CartCheckout";
import CartEmpty from "../CartEmpty/CartEmpty";

import "./CartContainer.scss";
const CartContainer = () => {
  const { cartList, deleteProd, deleteCantidad } = useCartContext();

  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    setEmpty(cartList.length === 0);
  }, [cartList]);

  return (
    <>
      {!empty ? (
        <div className="container w-75" key="cart-container">
          {cartList.map((prod) => (
            <CartItem
              key={prod.id}
              prod={prod}
              deleteCantidad={deleteCantidad}
              deleteProd={deleteProd}
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
