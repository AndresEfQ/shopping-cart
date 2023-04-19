import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Root from "../routes/Root";

describe("Root component", () => {

  test("Root renders correctly", () => {
    const { container } = render(<Root />, {wrapper: BrowserRouter});
    expect(container).toMatchSnapshot();
  });

  test("Home button has home link", () => {
    render(<Root />, {wrapper: BrowserRouter});

    expect(screen.getByRole("link", {name: "Home"}).href).toMatch("/");
  });

  test("Shop button has shop link", () => {
    render(<Root />, {wrapper: BrowserRouter});

    expect(screen.getByRole("link", {name: "Shop"}).href).toMatch("/shop");
  });
});