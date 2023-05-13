import Item from "../Item/Item";

const ItemList = ({ data, pagina, porPagina }) => {
  return data
    .slice((pagina - 1) * porPagina, (pagina - 1) * porPagina + porPagina)
    .map(({ id, imagen, nombre, precio, plataforma }) => (
      <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6">
        <Item
          id={id}
          imagen={imagen}
          nombre={nombre}
          precio={precio}
          plataforma={plataforma}
        />
      </div>
    ));
};

export default ItemList;
