import { useState } from "react";
import "./itemCount.css";

function ItemCount() {
  const [count, setCount] = useState(0);

  function handleSuma() {
    setCount(count + 1);
  }

  function handleResta() {
    setCount(count - 1);
  }
  return (
    <div className="itemCount">
      <div>
        <p>Cantidad</p>
      </div>
      <div className="btn-cont">
        <button disabled={count === 0} onClick={handleResta}>
          -
        </button>
        <p>{count}</p>
        <button onClick={handleSuma}>+</button>
      </div>
    </div>
  );
}

export default ItemCount;
