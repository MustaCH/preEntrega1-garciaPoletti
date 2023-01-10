import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/producto/:itemid" element={<ItemDetailContainer />} />
          <Route path="/cat/:catid" element={<ItemListContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
