import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  
  const [producto, guardarProducto] = useState({});
  const [estaCargando, guardarEstaCargando] = useState(true);
  const { pid } = useParams();

  useEffect(() => {
    setTimeout(async () => {
      const dbFirestore = getFirestore();
      const queryDoc = doc(dbFirestore, "productos", pid);
      getDoc(queryDoc)
        .then((resp) => guardarProducto({ id: resp.id, ...resp.data() }))
        .catch((err) => console.log(err))
        .finally(() => guardarEstaCargando(false));
    }, 2500);
  }, []);

  return (
    <div>{estaCargando ? <Loader /> : <ItemDetail producto={producto} />}</div>
  );
};

export default ItemDetailContainer;
