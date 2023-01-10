import Button from "../Button/Button";
import Flex from "../Flex/Flex";
import "./cardProd.css";

function CardProd(props) {
  const { title, img, price } = props.item;
  return (
    <div className="card">
      <p>{title}</p>
      <img src={img} alt={title} />
      <p>{"$" + price}</p>
      <Flex className="btns">
        <Button name="Ver producto" />
        <Button name="Agregar al carrito" />
      </Flex>
    </div>
  );
}

export default CardProd;
