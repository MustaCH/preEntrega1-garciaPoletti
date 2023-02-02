import { createContext, useState, useContext } from "react";
export const useCartContext = () => useContext(cartContext);
export const cartContext = createContext([]);

function CartProv({ children }) {
  const [cart, setCart] = useState([]);

  /*const addProduct = (item) => {
    const newCart = cart.filter((product) => product.id !== item.id);
    newCart.push({ ...item });
    setCart(newCart);
  };*/

  const addProduct = (item) => {
    let newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
  };

  console.log("carrito", cart);

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProd = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  return (
    <cartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeProd,
        addProduct,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export { CartProv };
