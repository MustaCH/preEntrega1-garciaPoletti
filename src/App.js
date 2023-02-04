import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { CartProv } from "./storage/cartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Router>
        <CartProv>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/producto/:itemid" element={<ItemDetailContainer />} />
            <Route path="/cat/:catid" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProv>
      </Router>
    </>
  );
}

export default App;
