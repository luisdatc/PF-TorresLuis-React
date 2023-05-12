import { Link } from "react-router-dom";
import "./OrdenConfirmation.scss";

const OrdenConfirmation = ({ ordenId }) => {
  return (
    <>
      <h1 className="text-center mt-3 mb-3 orden-id">
        El ID de su orden es: {ordenId}
      </h1>
      <div className="text-center mt-3 mb-3">
        <h3>Para volver al Home presiona en el logo de nuestra tienda</h3>
        <Link to="/">
          <img src="/logo2.png" alt="Logo Gamer Zone" className="img-fluid" />
        </Link>
      </div>
    </>
  );
};

export default OrdenConfirmation;
