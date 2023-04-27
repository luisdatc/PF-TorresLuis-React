import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";

import "./ItemListContainer.scss";
import Paginacion from "../Paginacion/Paginacion";
import { useParams } from "react-router-dom";
import PlatformIcon from "../PlatformIcon/PlatformIcon";

const ItemListContainer = () => {
  const [productos, SetProductos] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const { cid } = useParams();

  const getJson = (id) => {
    try {
      setTimeout(async () => {
        const resp = await fetch("/stock.json");
        const respParser = await resp.json();
        SetProductos(!id ? respParser : respParser.find(item.id === id));
        SetIsLoading(false);
      }, 3500);
    } catch (error) {
      console.log(error);
    }
  };

  const getJsonP = () => {
    try {
      setTimeout(async () => {
        const resp = await fetch("../../stock.json");
        const respParser = await resp.json();
        SetProductos(
          respParser.filter(
            (productos) => productos.plataforma.toLowerCase() === cid
          )
        );
        SetIsLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!cid) {
      getJson();
    } else {
      getJsonP();
    }
  }, [cid]);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(8);

  const maximo = Math.ceil(productos.length / porPagina);

  return (
    <div className="container container-prueba">
      <div className="row row-line">
        <PlatformIcon />
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
