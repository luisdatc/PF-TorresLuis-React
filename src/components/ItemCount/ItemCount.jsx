import { useState } from "react";
import "./ItemCount.scss";
import { useCartContext } from "../../context/CartContext";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const { totalCantidad } = useCartContext();

  const handleSuma = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleResta = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div className="text-center mt-4">
      <div>
        <button
          className="itemBuyButtonRight"
          onClick={handleResta}
          disabled={totalCantidad > 5}
        >
          -1
        </button>
        <button className="itemBuyButtonLeft" onClick={handleSuma}>
          +1
        </button>
        <button
          className="itemBuyButtonC"
          onClick={() => {
            onAdd(contador);
          }}
        >
          <span>AGREGAR</span>
        </button>
      </div>
      <div className="mt-4">
        <h4>
          Cantidad por agregar: <strong>{contador}</strong> *
        </h4>
      </div>
    </div>
  );
};

export default ItemCount;
