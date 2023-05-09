import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";
import Paginacion from "../Paginacion/Paginacion";
import PlatformIcon from "../PlatformIcon/PlatformIcon";
import MainSection from "../MainSection/MainSection";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

import "./ItemListContainer.scss";

const ItemListContainer = () => {
  const [productos, SetProductos] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const { cid } = useParams();

  const getData = () => {
    try {
      setTimeout(async () => {
        const dbFirestore = getFirestore();
        const queryCollection = collection(dbFirestore, "productos");

        getDocs(queryCollection)
          .then((resp) =>
            SetProductos(
              resp.docs.map((productos) => ({
                id: productos.id,
                ...productos.data(),
              }))
            )
          )
          .catch((err) => console.log(err))
          .finally(() => SetIsLoading(false));
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataCategory = () => {
    try {
      const dbFirestore = getFirestore();
      const queryCollection = collection(dbFirestore, "productos");

      const queryFiltrada = query(
        queryCollection,
        where("plataforma", "==", cid)
      );

      getDocs(queryFiltrada)
        .then((resp) =>
          SetProductos(
            resp.docs.map((productos) => ({
              id: productos.id,
              ...productos.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => SetIsLoading(false));
/*       setTimeout(async () => {
      }, 1000); */
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!cid) {
      getData();
    } else {
      getDataCategory();
      setPagina(1);
    }
  }, [cid]);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(8);

  const maximo = Math.ceil(productos.length / porPagina);

  return (
    <>
      <MainSection />
      <div className="container w-75 mx-auto">
        <div className="row">
          <PlatformIcon />
          {isLoading ? (
            <Loader />
          ) : (
            <ItemList data={productos} pagina={pagina} porPagina={porPagina} />
          )}
          <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
