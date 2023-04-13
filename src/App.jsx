import NavMenu from "./components/NavMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemlistContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavMenu />
      <ItemListContainer greeting="Saludos te desea"/>
    </>
  );
}

export default App;
