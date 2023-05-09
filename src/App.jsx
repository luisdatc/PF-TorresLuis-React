import NavMenu from "./components/NavMenu/NavMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import MainSection from "./components/MainSection/MainSection";
import ShipCardSales from "./components/ShipCardSales/ShipCardSales";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound404 from "./components/NotFound404/NotFound404";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavMenu />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/plataforma/:cid" element={<ItemListContainer />} />
          <Route path="/detalle/:pid" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutForm />} />

          <Route path="/NotFound404" element={<NotFound404 />} />
          {/* <Route path="*" element={<Navigate to="/" />} />  */}
          <Route path="*" element={<Navigate to="/NotFound404" />} />
        </Routes>
        <ShipCardSales />
        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
