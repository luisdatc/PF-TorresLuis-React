import "./FormDetail.scss";

const FormDetail = ({ crearOrden, handleOnChange, datosCompra }) => {
  return (
    <>
      <main className="section_form">
        <form onSubmit={crearOrden} className="feed-form">
          <label htmlFor="nombre">Nombre y Apellido</label>
          <input
            name="nombre"
            required=""
            placeholder="Nombre y Apellido"
            type="text"
            id="nombre"
            onChange={handleOnChange}
            value={datosCompra.nombre}
          />
          <label htmlFor="telefono">Telefono</label>
          <input
            name="telefono"
            required=""
            placeholder="Telefono"
            type="text"
            id="telefono"
            onChange={handleOnChange}
            value={datosCompra.telefono}
          />
          <label htmlFor="correo">Correo Electronico</label>
          <input
            name="correo"
            required=""
            placeholder="Correo Electronico"
            type="email"
            id="correo"
            onChange={handleOnChange}
            value={datosCompra.correo}
          />
          <label htmlFor="verifyCorreo">Repetir Correo Electronico</label>
          <input
            name="verifyCorreo"
            required=""
            placeholder="Repite Correo Electronico"
            type="email"
            id="verifyCorreo"
            onChange={handleOnChange}
            value={datosCompra.verifyCorreo}
          />
          <button className="button_submit">Crear Orden</button>
        </form>
      </main>
    </>
  );
};

export default FormDetail;
