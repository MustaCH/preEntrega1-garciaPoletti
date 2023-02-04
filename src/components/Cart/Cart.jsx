import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { useCartContext } from "../../storage/cartContext";
import "./cart.css";
import { createCompra } from "../../services/firebase";
import Swal from "sweetalert2";

const Cart = () => {
  const [compraId, setCompraId] = useState();
  const { cart, totalPrice, clearCart } = useCartContext();

  function handleCheckout() {
    const compra = {
      client: {
        name: "hdsjkg",
        email: "sahk@dshgk.com",
        tel: 21234,
        direccion: "djkshg",
        localidad: "dshgdjk",
        cp: 21285,
      },
      items: cart,
      total: totalPrice(),
      date: new Date(),
    };
    createCompra(compra).then((id) => {
      Swal.fire({
        title: "Compra realizada",
        text: `Tu orden de compra es ${id}`,
        icon: "success",
        confirmButtonText: "Confirmar",
        confirmButtonColor: "black",
      }).then((result) => {
        if (result.isConfirmed) {
          clearCart();
        }
      });
    });
    async function sendCompra() {
      let id = await createCompra(compra);
      setCompraId(id);
    }
    sendCompra();
  }

  if (cart.length === 0 || compraId) {
    return (
      <div className="empty-cart">
        <p>No hay elementos en el carrito</p>
        <Link className="go-shop" to="/">
          Volver a la tienda
        </Link>
      </div>
    );
  }
  return (
    <div className="cart-container">
      {cart.map((product) => (
        <CartItem key={product.title} product={product} />
      ))}
      <p className="total-price">Total: ${totalPrice()}</p>
      <div>
        <button onClick={handleCheckout} className="btn-finalizar">
          Finalizar compra
        </button>
        <button onClick={() => clearCart()} className="btn-eliminar">
          Borrar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
