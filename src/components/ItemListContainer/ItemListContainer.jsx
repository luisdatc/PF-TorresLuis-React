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

const ItemListContainer = () => {
  const [productos, guardarProductos] = useState([]);
  const [estaCargando, guardarEstaCargando] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, "productos");

    if (!cid) {
      setTimeout(async () => {
        getDocs(queryCollection)
          .then((resp) =>
            guardarProductos(
              resp.docs.map((productos) => ({
                id: productos.id,
                ...productos.data(),
              }))
            )
          )
          .catch((err) => console.log(err))
          .finally(() => guardarEstaCargando(false));
      }, 2500);
    } else {
      const queryFiltrada = query(
        queryCollection,
        where("plataforma", "==", cid)
      );

      getDocs(queryFiltrada)
        .then((resp) =>
          guardarProductos(
            resp.docs.map((productos) => ({
              id: productos.id,
              ...productos.data(),
            }))
          )
        )
        .catch((err) => console.log(err))
        .finally(() => guardarEstaCargando(false));
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
          {estaCargando ? (
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
