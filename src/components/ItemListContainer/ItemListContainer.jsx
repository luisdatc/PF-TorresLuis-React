import "./ItemListContainer.scss";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="greeting">
      <h1 className="greeting-title">{greeting} </h1>
      <img src="../src/assets/logo-bg.png" alt="Logo" className="greeting-logo"/>
    </div>
  );
};

export default ItemListContainer;
