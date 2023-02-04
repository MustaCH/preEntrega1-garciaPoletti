import ItemCount from "../ItemCount/ItemCount";
import React, { useState } from "react";
import { useCartContext } from "../../storage/cartContext";
import "./itemDetail.css";
import { Link } from "react-router-dom";

function ItemDetail({ img, title, price }) {
  const [countInCart, setCountInCart] = useState(0);
  const { addProduct } = useCartContext();

  const handleAddToCart = (count) => {
    setCountInCart(count);
    addProduct({ title, price, count });
  };

  return (
    <div className="container">
      <div className="detail">
        <div className="img-prod">
          <img src={img} alt={title} />
        </div>
        <div className="oper">
          <p className="titulo">{title}</p>
          <p className="precio">{"$" + price}</p>
          {countInCart === 0 ? (
            <ItemCount onAddToCart={handleAddToCart} />
          ) : (
            <Link to="/cart">Ir al carrito</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
