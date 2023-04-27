import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

const ItemDetailContainer = () => {
  const [producto, SetProductos] = useState({});
  const [isLoading, SetIsLoading] = useState(true);
  const { pid } = useParams();

  const getJson = (id) => {
    try {
      setTimeout(async () => {
        const resp = await fetch("/stock.json");
        const respParser = await resp.json();
        if (!id) {
          SetProductos(respParser);
        } else {
          const producto = respParser.find((producto) => producto.id === id);
          SetProductos(producto /* || [] */);
        }
        SetIsLoading(false);
      }, 3500);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJson(pid);
  }, []);

  return (
    <div>{isLoading ? <Loader /> : <ItemDetail producto={producto} />}</div>
  );
};

export default ItemDetailContainer;
