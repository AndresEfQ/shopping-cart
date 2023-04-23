import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState({
    items: [
      {
        name: 'card',
        img: 'drawing',
        price: 3,
        number: 4
      },
      {
        name: 'card',
        img: 'drawing',
        price: 3,
        number: 2
      },
    ],
  });

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}

export default CartContextProvider;