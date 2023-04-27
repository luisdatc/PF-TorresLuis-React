import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Paginacion.scss";

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

//en duda esta funcion
  const handleClick = () => {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  };

  const ScrollToTopButtonNext = () => {
    nextPage();
    handleClick();
  };
//hasta aca la duda

  return (
    <div className="pagination">
      <button
        className="page"
        onClick={previousPage}
        disabled={pagina === 1 || pagina < 1}
      >
        <FaArrowLeft className="arrow" />
        <span>Back</span>
      </button>
      <div className="input-p">
        <input name="page" autoComplete="off" disabled value={input} />
        <p className="m-0">de {maximo}</p>
      </div>
      <button
        className="page"
        onClick={ScrollToTopButtonNext}
        disabled={pagina === maximo || pagina > maximo}
      >
        <span>Next</span>
        <FaArrowRight className="arrowR" />
      </button>
    </div>
  );
};

export default Paginacion;
