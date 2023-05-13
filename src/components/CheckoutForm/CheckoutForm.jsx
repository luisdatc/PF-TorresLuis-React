import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import OrdenConfirmation from "../OrdenConfirmation/OrdenConfirmation";
import FormDetail from "../FormDetail/FormDetail";

const CheckoutForm = () => {
  const { carritoLista, vaciarCarrito, totalCarrito } = useCartContext();
  const [ordenId, guardarOrdenId] = useState(null);

  const [datosCompra, guardarDatosCompra] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    verifyCorreo: "",
  });

  const crearOrden = (evt) => {
    evt.preventDefault();

    if (
      datosCompra.nombre.trim() === "" ||
      datosCompra.telefono.trim() === "" ||
      datosCompra.correo.trim() === "" ||
      datosCompra.verifyCorreo.trim() === ""
    ) {
      alert("Ingrese todo los campos");
      return;
    }

    if (datosCompra.verifyCorreo.trim() !== datosCompra.correo.trim()) {
      alert("Los correos electronicos no son iguales. Por favor verifiquelos");
      return;
    }

    const orden = {};
    orden.buyer = datosCompra;
    orden.items = carritoLista.map(({ nombre, id, precio, cantidad }) => ({
      id,
      nombre,
      precio,
      cantidad,
    }));
    orden.total = totalCarrito();

    //crear y agregar la orden a firestore
    const dbFirestore = getFirestore();
    const ordenCollection = collection(dbFirestore, "ordenes");
    addDoc(ordenCollection, orden)
      .then((respuesta) => {
        guardarOrdenId(respuesta.id);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        guardarDatosCompra({ nombre: "", telefono: "", correo: "" });
        setTimeout(() => {
          vaciarCarrito();
        }, 2000);
      });
  };

  const handleOnChange = (event) => {
    guardarDatosCompra({
      ...datosCompra,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {ordenId ? (
        <OrdenConfirmation ordenId={ordenId} />
      ) : (
        <FormDetail
          crearOrden={crearOrden}
          handleOnChange={handleOnChange}
          datosCompra={datosCompra}
        />
      )}
    </>
  );
};

export default CheckoutForm;
