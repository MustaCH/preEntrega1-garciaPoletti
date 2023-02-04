import { useState } from "react";
import "../Button/button.css";
import "./itemCount.css";

function ItemCount({ onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleSuma() {
    setCount(count + 1);
  }

  function handleResta() {
    setCount(count - 1);
  }

  return (
    <div className="item-count">
      <div>
        <p>Cantidad</p>
      </div>
      <div className="btn-cont">
        <button disabled={count === 1} onClick={handleResta}>
          -
        </button>
        <p>{count}</p>
        <button onClick={handleSuma}>+</button>
        <button onClick={() => onAddToCart(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
