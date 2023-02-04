import { useCartContext } from "../../storage/cartContext";

function CartWidget() {
  const { cart } = useCartContext();

  return (
    <>
      <img className="carrito" src="/img/shopping-cart.png" alt="carrito" />
      <span>{cart.length}</span>
    </>
  );
}

export default CartWidget;
