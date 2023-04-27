import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

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
    <div>
      <div>
        <button className="btn btn-primary" onClick={handleResta}>
          -1
        </button>
        <h4>Cantidad por agregar:{contador}</h4>
        <button className="btn btn-primary" onClick={handleSuma}>
          +1
        </button>
        <button className="btn btn-primary" onClick={()=>{onAdd(contador)}}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
