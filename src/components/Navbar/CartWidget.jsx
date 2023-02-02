import { useCartContext } from "../../storage/cartContext";

function CartWidget() {
  const { cartContext } = useCartContext();

  return (
    <>
      <img className="carrito" src="/img/shopping-cart.png" alt="carrito" />
      <span>{cartContext}</span>
    </>
  );
}

export default CartWidget;
