import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import "./cardProd.css";
import { Link } from "react-router-dom";

function CardProd(props) {
  const { title, img, price, id } = props.item;
  return (
    <div className="card">
      <p>{title}</p>
      <Link to={`/producto/${id}`}>
        <img src={img} alt={title} />
      </Link>
      <p>{"$" + price}</p>
      <Flex className="btns">
        <Link to={`/producto/${id}`}>
          <Button name="Ver producto" />
        </Link>
        <Button name="Agregar al carrito" />
      </Flex>
    </div>
  );
}

export default CardProd;
