import "./FormDetail.scss";

const FormDetail = ({ createOrder, handleOnChange, dataCheckout }) => {
  return (
    <>
      <main className="section_form">
        <form onSubmit={createOrder} className="feed-form">
          <label htmlFor="nombre">Nombre y Apellido</label>
          <input
            name="nombre"
            required=""
            placeholder="Nombre y Apellido"
            type="text"
            id="nombre"
            onChange={handleOnChange}
            value={dataCheckout.nombre}
          />
          <label htmlFor="telefono">Telefono</label>
          <input
            name="telefono"
            required=""
            placeholder="Telefono"
            type="text"
            id="telefono"
            onChange={handleOnChange}
            value={dataCheckout.telefono}
          />
          <label htmlFor="correo">Correo Electronico</label>
          <input
            name="correo"
            required=""
            placeholder="Correo Electronico"
            type="email"
            id="correo"
            onChange={handleOnChange}
            value={dataCheckout.correo}
          />
          <label htmlFor="verifyCorreo">Repetir Correo Electronico</label>
          <input
            name="verifyCorreo"
            required=""
            placeholder="Repite Correo Electronico"
            type="email"
            id="verifyCorreo"
            onChange={handleOnChange}
            value={dataCheckout.verifyCorreo}
          />
          <button className="button_submit">Crear Orden</button>
        </form>
      </main>
    </>
  );
};

export default FormDetail;
