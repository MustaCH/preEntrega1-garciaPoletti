import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer title="Bienvenidos a Crow Indumentaria" />
    </>
  );
}

export default App;
