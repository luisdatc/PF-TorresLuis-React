import { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, SetProductos] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  const getJson = async () => {
    try {
      const resp = await fetch("../../stock.json");
      const respParser = await resp.json();
      SetProductos(respParser);
      setTimeout(() => {
        SetIsLoading(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getJson();
  }, []);

  return (
    <div  className="row">
      {isLoading ? <Loader /> : <ItemList data={productos} />}
    </div>
  );
};

export default ItemListContainer;
