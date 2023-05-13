import { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [carritoLista, setCarritoLista] = useState([]);

  const agregarCarrito = (productoNuevo) => {
    //Verificar si el producto ya esta en el carrito
    const index = carritoLista.findIndex(
      (producto) => producto.id === productoNuevo.id
    );

    const toastError = () => {
      toast(
        `😣 No puedes agregar mas de 5 unidades de ${productoNuevo.nombre}`,
        {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "dark",
        }
      );
    };

    if (index !== -1) {
      //sumar cantidad si el producto ya esta en el carrito

      const nuevoCarritoLista = [...carritoLista];
      const totalUnidades =
        nuevoCarritoLista[index].cantidad + productoNuevo.cantidad;
      if (totalUnidades > 5) {
        toastError();
      } else {
        nuevoCarritoLista[index].cantidad = totalUnidades;
        setCarritoLista(nuevoCarritoLista);
        toast(
          `✔ Se sumo la cantidad al carrito del producto ${productoNuevo.nombre}`,
          {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
    } else {
      if (productoNuevo.cantidad > 5) {
        toastError();
      } else {
        setCarritoLista([...carritoLista, productoNuevo]);
        toast(`😉 Se agrego ${productoNuevo.nombre} al carrito`, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  //cantidad total de articulos en el carrito
  const cantidadTotalEnCarrito = () => {
    return carritoLista.reduce(
      (total, producto) => total + producto.cantidad,
      0
    );
  };

  //cantidad total de la compra
  const totalCarrito = () => {
    return carritoLista.reduce(
      (total, producto) => total + producto.precio * producto.cantidad,
      0
    );
  };

  //eliminar por articulo -->hacerlo por el id
  const borrarProducto = (id) => {
    setCarritoLista((itemCart) => itemCart.filter((item) => item.id !== id));
    toast("😭 Producto Eliminado", {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  //eliminar por unidad de prodcuto
  const borrarCantidad = (id) => {
    const index = carritoLista.findIndex((producto) => producto.id === id);
    if (index !== -1) {
      const nuevoCarritoLista = [...carritoLista];
      if (nuevoCarritoLista[index].cantidad > 1) {
        nuevoCarritoLista[index].cantidad -= 1; //resto una unidad al producto
        setCarritoLista(nuevoCarritoLista);
        toast("😢 Eliminaste una unidad del producto", {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        borrarProducto(id); //si el producto tiene una sola unidad lo elimino
      }
    }
  };

  //vaciar carrito completo
  const vaciarCarrito = () => {
    setCarritoLista([]);
    toast(" Se vacio el carrito", {
      position: "top-right",
      autoClose: 3500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <CartContext.Provider
      value={{
        carritoLista,
        agregarCarrito,
        vaciarCarrito,
        borrarProducto,
        cantidadTotalEnCarrito,
        totalCarrito,
        borrarCantidad,
      }}
    >
      {children}
      <ToastContainer />
    </CartContext.Provider>
  );
};
