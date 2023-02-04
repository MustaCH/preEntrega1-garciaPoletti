import { createContext, useState, useContext } from "react";
export const useCartContext = () => useContext(cartContext);
export const cartContext = createContext([]);

function CartProv({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (item) => {
    let newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.count * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoAcual) => acumulador + productoAcual.count,
      0
    );

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProd = (title) =>
    setCart(cart.filter((product) => product.title !== title));

  return (
    <cartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProd,
        addProduct,
        totalPrice,
        totalProducts,
        cart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { CartProv };
