import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.scss";
import Paginacion from "../Paginacion/Paginacion";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, SetProductos] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const { cid } = useParams;

  const getJson = async () => {
    try {
      const resp = await fetch("../../stock.json");
      const respParser = await resp.json();
      SetProductos(respParser);
      setTimeout(() => {
        SetIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const getJsonP = async () => {
    try {
      const resp = await fetch("../../stock.json");
      const respParser = await resp.json();
      SetProductos(
        respParser.filter((productos) => productos.plataforma === cid)
      );
      setTimeout(() => {
        SetIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(cid);

  useEffect(() => {
    if (!cid) {
      getJson();
    } else {
      getJsonP();
    }
  }, [cid]);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(12);

  const maximo = productos.length / porPagina;

  return (
    <div className="container container-prueba">
      <div className="row row-line" id="productos">
        {isLoading ? (
          <Loader />
        ) : (
          <ItemList data={productos} pagina={pagina} porPagina={porPagina} />
        )}
        <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
      </div>
    </div>
  );
};

export default ItemListContainer;
