import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Home from "../routes/Home";

describe("Home component", () => {

  test("Renders correctly", () => {
    const { container } = render(<Home />, {wrapper: BrowserRouter})
    expect(container).toMatchSnapshot();
  });

  test("Shop call to action has shop link", async () => {
    render(<Home />, {wrapper: BrowserRouter});

    expect(screen.getByRole("link", {name: "Shop now"}).href).toMatch("/shop");
  });

});