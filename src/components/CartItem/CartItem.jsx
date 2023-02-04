import React from "react";
import { useCartContext } from "../../storage/cartContext";
import "./cartItem.css";

const CartItem = ({ product }) => {
  const { removeProd } = useCartContext();
  return (
    <div className="cart-item">
      <div className="cart-item-detail">
        <p>
          Producto: <br />
          {product.title}
        </p>
        <p>Cantidad: {product.count}</p>
        <p>Precio: ${product.price}</p>
        <p>Subtotal: ${product.count * product.price}</p>
        <button
          onClick={() => removeProd(product.title)}
          className="delete-btn"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
