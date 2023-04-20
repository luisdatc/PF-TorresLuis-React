import { useState } from "react";

const Paginacion = ({ pagina, setPagina, maximo }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setPagina(pagina + 1);
  };

  const previousPage = () => {
    setInput(input - 1);
    setPagina(pagina - 1);
  };

  return (
    <div className="pagination">
      <button
        className="previousPage"
        onClick={previousPage}
        disabled={pagina === 1 || pagina < 1}
      >
        Previous
      </button>
      <input name="page" autoComplete="off" disabled value={input} />
      <p>de {maximo}</p>
      <button className="nextPage" onClick={nextPage} disabled={pagina === maximo || pagina > maximo}>
        Next
      </button>
    </div>
  );
};

export default Paginacion;
