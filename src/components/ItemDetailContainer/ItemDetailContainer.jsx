import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [producto, SetProducto] = useState({});
  const [isLoading, SetIsLoading] = useState(true);
  const { pid } = useParams();

  const getJson = (id) => {
    try {
      setTimeout(async () => {
        /* 
        const resp = await fetch("/stock.json");
        const respParser = await resp.json();
        if (!id) {
          SetProducto(respParser);
        } else {
          const producto = respParser.find((producto) => producto.id === id);
          SetProducto(producto  || [] );
        }
        SetIsLoading(false); */
        const dbFirestore = getFirestore();
        const queryDoc = doc(dbFirestore, "productos", pid); //aca solo me trae un producto consultar

        getDoc(queryDoc)
          .then((resp) => SetProducto({ id: resp.id, ...resp.data() }))
          .catch((err) => console.log(err))
          .finally(() => SetIsLoading(false));
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  /*  const getJson = (id) => {
    setTimeout(, 2500);
  }; */

/*   useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, "productos", pid); //aca solo me trae un producto consultar

    getDoc(queryDoc)
      .then((resp) => SetProducto({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => SetIsLoading(false));
  }, []);
 */
    useEffect(() => {
    getJson(pid);
  }, []);
 
  return (
    <div>{isLoading ? <Loader /> : <ItemDetail producto={producto} />}</div>
  );
};

export default ItemDetailContainer;
