import Item from "../Item/Item";
import "./ItemList.scss";

const ItemList = ({ data }) => {
  return data.map(({ id, imagen, nombre, precio, plataforma }) => (
    <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-6">
      <Item 
        imagen={imagen}
        nombre={nombre}
        precio={precio}
        plataforma={plataforma}
      />
    </div>

  ));
};

export default ItemList;
