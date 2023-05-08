import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (productoNuevo) => {
    //Verificar si el producto ya esta en el carrito
    const index = cartList.findIndex(
      (producto) => producto.id === productoNuevo.id
    );

    if (index !== -1) {
      //sumar cantidad si el producto ya esta en el carrito
      const newCartList = [...cartList];
      newCartList[index].cantidad += productoNuevo.cantidad;
      setCartList(newCartList);
    } else {
      //si el producto no esta en el carrito loa grego
      setCartList([...cartList, productoNuevo]);
    }
    //por si quiero guardar en local--->localStorage.setItem("cartList", cartList)
  };

  //cantidad total de articulos en el carrito
  const cantidadTotalEnCarrito = () => {
    return cartList.reduce((total, producto) => total + producto.cantidad, 0);
  };

  //cantidad total de la compra
  const totalCarrito = () => {
    return cartList.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  };

  //eliminar por articulo -->hacerlo por el id
  const deleteProd = (id) => {
    setCartList((itemCart) => itemCart.filter((item) => item.id !== id));
  };

  //eliminar por unidad de prodcuto
  const deleteCantidad = (id) => {
    const index = cartList.findIndex((producto) => producto.id === id);
    if (index !== -1) {
      const newCartList = [...cartList];
      if (newCartList[index].cantidad > 1) {
        newCartList[index].cantidad -= 1; //resto una unidad al producto
        setCartList(newCartList);
      } else {
        deleteProd(id); //si el producto tiene una sola unidad lo elimino
      }
    }
  };

  //vaciar carrito completo
  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        vaciarCarrito,
        deleteProd,
        cantidadTotalEnCarrito,
        totalCarrito,
        deleteCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
