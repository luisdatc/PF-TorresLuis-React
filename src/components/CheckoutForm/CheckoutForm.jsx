import { useState } from "react";
import "./CheckoutForm.scss";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import OrdenConfirmation from "../OrdenConfirmation/OrdenConfirmation";
import FormDetail from "../FormDetail/FormDetail";

const CheckoutForm = () => {
  const { cartList, vaciarCarrito, totalCarrito } = useCartContext();
  const [ordenId, setOrdenId] = useState(null);

  const [dataCheckout, setDataCheckout] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    verifyCorreo: "",
  });

  const createOrder = (evt) => {
    evt.preventDefault();

    if (
      dataCheckout.nombre.trim() === "" ||
      dataCheckout.telefono.trim() === "" ||
      dataCheckout.correo.trim() === "" ||
      dataCheckout.verifyCorreo.trim() === ""
    ) {
      alert("Ingrese todo los campos");
      return;
    }

    if (dataCheckout.verifyCorreo.trim() !== dataCheckout.correo.trim()) {
      alert("Los correos electronicos no son iguales. Por favor verifiquelos");
      return;
    }

    const orden = {};
    orden.buyer = dataCheckout;
    orden.items = cartList.map(({ nombre, id, precio, cantidad }) => ({
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
      .then((respuesta) => {setOrdenId(respuesta.id);})
      .catch((err) => console.log(err))
      .finally(() => {
        setDataCheckout({nombre: "", telefono: "",correo: ""});
        setTimeout(() => {vaciarCarrito();}, 2000);
      });
  };

  const handleOnChange = (event) => {
    setDataCheckout({...dataCheckout,[event.target.name]: event.target.value});
  };

  return (
    <>
      {ordenId ? (
        <OrdenConfirmation ordenId={ordenId} />
      ) : (
        <FormDetail
          createOrder={createOrder}
          handleOnChange={handleOnChange}
          dataCheckout={dataCheckout}
        />
      )}
    </>
  );
};

export default CheckoutForm;
