import { useState } from "react";
import "./CheckoutForm.scss";
import { useCartContext } from "../../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const { cartList, vaciarCarrito, totalCarrito } = useCartContext();
  const [ordenId, setOrdenId] = useState(null);

  const [dataCheckout, setDataCheckout] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    /* total: totalCarrito(), SI QUIERO QUE ME SALGA COMO CAMPO EN LOS DATOS DEL COMPRADOR*/
  });

  const createOrder = (evt) => {
    evt.preventDefault();

    if (
      dataCheckout.nombre.trim() === "" ||
      dataCheckout.telefono.trim() === "" ||
      dataCheckout.correo.trim() === ""
    ) {
      alert("Ingrese todo los campos");
      return;
    }

    const orden = {};
    orden.buyer = dataCheckout;
    createOrder.items = cartList.map(({ nombre, id, precio, cantidad }) => ({
      id,
      nombre,
      precio,
      cantidad,
    }));
    orden.total = totalCarrito(); //SI SACO ESTO Y COLOCO EL DATACHECKOUT.TOTAL ME SALE EL TOTAL DE LA COMPRA COMO CAMPO

    //crear y agregar la orden a firestore
    const dbFirestore = getFirestore();
    const ordenCollection = collection(dbFirestore, "ordenes");
    addDoc(ordenCollection, orden)
      .then((respuesta) => {
        setOrdenId(respuesta.id);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setDataCheckout({
          nombre: "",
          telefono: "",
          correo: "",
        });
        setTimeout(() => {
          vaciarCarrito();
        }, 2000);
      });
  };

  const handleOnChange = (event) => {
    setDataCheckout({
      ...dataCheckout,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {ordenId ? (
        <>
          <h1 className="text-center mt-3 mb-3 orden-id">
            El ID de su orden es: {ordenId}
          </h1>
          <div className="text-center mt-3 mb-3">
            <h3>Para volver al Home presiona en el logo de nuestra tienda</h3>
            <Link to="/">
              <img src="/logo2.png" alt="Logo Gamer Zone" className="img-fluid" />
            </Link>
          </div>
        </>
      ) : (
        <main className="section_form">
          <form onSubmit={createOrder} className="feed-form">
            <input
              name="nombre"
              required=""
              placeholder="Nombre y Apellido"
              type="text"
              onChange={handleOnChange}
              value={dataCheckout.nombre}
            />
            <input
              name="telefono"
              required=""
              placeholder="Telefono"
              type="text"
              onChange={handleOnChange}
              value={dataCheckout.telefono}
            />
            <input
              name="correo"
              required=""
              placeholder="Correo Electronico"
              type="email"
              onChange={handleOnChange}
              value={dataCheckout.correo}
            />
            <button className="button_submit">Crear Orden</button>
          </form>
        </main>
      )}
    </>
  );
};

export default CheckoutForm;
