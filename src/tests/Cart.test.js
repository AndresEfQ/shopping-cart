import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "../routes/Shop";
import Cart from "../components/Cart";
import CartContextProvider, { CartContext } from "../context/CartContext"

const customCart = {
  cart: {
    items: [
      {
        name: "test card 1",
        img: "test img 1",
        number: 2,
        price: 0.5,
      },
      {
        name: "test card 2",
        img: "test img 2",
        number: 2,
        price: 1,
      }
    ]
  },
  setCart: () => {},
}

describe("Cart component", () => {

  test("Cart renders correctly", () => {
    const { container } = render(<CartContextProvider><Cart /></CartContextProvider>);

    expect(container).toMatchSnapshot();
  });

  test("Renders cart items", () => {
    render(<CartContext.Provider value={customCart}><Cart /></CartContext.Provider>);
    expect(screen.getByRole("heading", {name: "test card 1"})).toBeInTheDocument();
  });

  test("Renders cards number correctly", () => {
    render(<CartContext.Provider value={customCart}><Cart /></CartContext.Provider>);
    expect(screen.getAllByTestId("cards-number")[0]).toHaveTextContent("2");
  });
  
  test("Calculates cards price correctly", () => {
    render(<CartContext.Provider value={customCart}><Cart /></CartContext.Provider>);
    expect(screen.getAllByTestId("cards-price")[0]).toHaveTextContent("1");
  });

  test("Calculates subtotal price correctly", () => {
    render(<CartContext.Provider value={customCart}><Cart /></CartContext.Provider>);
    expect(screen.getByTestId("subtotal")).toHaveTextContent("3");
  });

});