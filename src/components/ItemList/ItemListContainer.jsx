import { useEffect, useState } from "react";
import CardProd from "../Card/CardProd";
import Flex from "../Flex/Flex";
import obtenerProducts from "../../services/mockService";
import { getProductBycat } from "../../services/mockService";
import "./itemListContainer.css";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [productoStock, setProductoStock] = useState([]);
  let { catid } = useParams();

  useEffect(() => {
    if (!catid) {
      obtenerProducts()
        .then((response) => {
          setProductoStock(response);
        })
        .catch((error) => alert(error));
    } else {
      getProductBycat(catid).then((response) => {
        setProductoStock(response);
      });
    }
  });

  return (
    <div className="itemListContainer">
      <div className="greeting">
        <h1>NUESTROS PRODUCTOS</h1>
      </div>
      <Flex>
        {productoStock.map((item) => (
          <CardProd key={item.id} item={item} />
        ))}
      </Flex>
    </div>
  );
}

export default ItemListContainer;
