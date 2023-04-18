import NavMenu from "./components/NavMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainSection from "./components/MainSection/MainSection";
import ShipCardSales from "./components/ShipCardSales/ShipCardSales";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <MainSection />
      <ShipCardSales />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/detalle" element={<ItemDetailContainer />} />
        {/* <Route path="/404NotFound" element={<404NotFound/>} /> CREAR EL COMPONENTE*/}
        <Route path="*" element={<Navigate to="/" />} />
        {/*         <Route path="*" element={<Navigate to="/404NotFound" />} />
         */}
      </Routes>
      <ShipCardSales />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
