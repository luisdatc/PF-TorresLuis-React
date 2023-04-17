import { useEffect, useState } from "react";
import "./ItemListContainer.scss";
import Loader from "../Loader/Loader";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, SetProductos] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  /* setTimeout(() => {}, 3000); */

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

  /* useEffect(() => {
    setTimeout(() => {
      fetch("../../stock.json")
        .then((response) => response.json())
        .then((data) => {
          SetProductos(data);
          SetIsLoading(false);
        });
    }, 3000);
  }, []); */

  return (
    <div className="row row-line" id="productos">
      {isLoading ? <Loader /> : <ItemList data={productos} />}
    </div>
  );
};

export default ItemListContainer;
