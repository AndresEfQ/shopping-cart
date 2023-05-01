import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Root from "../routes/Root";
import CartContextProvider from "../context/CartContext";

describe("Root component", () => {

  test("Root renders correctly", () => {
    const { container } = render(<CartContextProvider><Root windowWidth="1866" /></CartContextProvider>, {wrapper: BrowserRouter});
    expect(container).toMatchSnapshot();
  });

  test("Home button has home link", () => {
    render(<CartContextProvider><Root windowWidth="1866" /></CartContextProvider>, {wrapper: BrowserRouter});

    expect(screen.getByRole("link", {name: "Home"}).href).toMatch("/");
  });

  test("Shop button has shop link", () => {
    render(<CartContextProvider><Root windowWidth="1866"u /></CartContextProvider>, {wrapper: BrowserRouter});

    expect(screen.getByRole("link", {name: "Shop"}).href).toMatch("/shop");
  });
});