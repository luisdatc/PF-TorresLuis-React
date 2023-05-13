import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

import "./ItemCount.scss";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, guardarContador] = useState(initial);
  const { totalCantidad } = useCartContext();

  const handleSuma = () => {
    if (contador < stock) {
      guardarContador(contador + 1);
    }
  };

  const handleResta = () => {
    if (contador > 1) {
      guardarContador(contador - 1);
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
