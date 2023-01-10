import ItemCount from "../ItemCount/ItemCount";
import Button from "../Button/Button";
import "./itemDetail.css";

function ItemDetail(props) {
  return (
    <div className="container">
      <div className="detail">
        <div className="img-prod">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="oper">
          <p className="titulo">{props.title}</p>
          <p className="precio">{"$" + props.price}</p>
          <ItemCount />
          <Button name="Comprar" />
          <Button name="Agregar al carrito" />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
