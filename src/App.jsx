import NavMenu from "./components/NavMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemlistContainer/ItemListContainer";
import MainSection from "./components/MainSection/MainSection";
import ShipCardSales from "./components/ShipCardSales/ShipCardSales";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavMenu />
      <MainSection />
      <ShipCardSales />
      <ItemListContainer />
      <ShipCardSales />
      <Footer></Footer>
    </>
  );
}

export default App;
