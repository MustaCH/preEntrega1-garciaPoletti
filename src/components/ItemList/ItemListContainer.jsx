import { useState } from "react";
import CardProd from "../Card/CardProd";
import Flex from "../Flex/Flex";
import obtenerProducts from "../../services/mockService";
import "./itemListContainer.css";

function ItemListContainer(props) {
  const [productoStock, setProductoStock] = useState([]);

  obtenerProducts().then((response) => {
    setProductoStock(response);
  }, []);

  return (
    <div className="itemListContainer">
      <Flex>
        {productoStock.map((item) => (
          <CardProd key={item.id} item={item} />
        ))}
      </Flex>
    </div>
  );
}

export default ItemListContainer;
