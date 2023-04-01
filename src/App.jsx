import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
      <><Navbar />
      <ItemListContainer greeting ='Saludos te desea'/> </>
      /*  
      <div>
        <Navbar />
        <ItemListContainer greeting ='Saludos'/>
      </div> 
    */
  );
};

export default App;
