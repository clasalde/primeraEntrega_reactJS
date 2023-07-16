import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  const eliminarDelCarrito = (id) => {
    setCart( cart.filter((prod) => prod.id !== id))
  };

  const inCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totalCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.price, 0);
  };

  const cantidadItemsCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        eliminarDelCarrito,
        inCart,
        totalCarrito,
        cantidadItemsCarrito,
        vaciarCarrito
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
