import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "../routes/Shop";
import CartContextProvider from "../context/CartContext"

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify({sets: []}));
});

describe("Shop component", () => {

  test("Renders correctly", () => {
    const { container } = render(<CartContextProvider><Shop /></CartContextProvider>);
    expect(container).toMatchSnapshot();
  })

  test("Fetches data on mount", async () => {
    render(<CartContextProvider><Shop /></CartContextProvider>);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("Cards number starts at 0", () => {
    render(<CartContextProvider><Shop /></CartContextProvider>);
    expect(screen.getAllByRole("textbox")[0]).toHaveValue("0");
  });

  test("Cards number increases to 2", async () => {

    const user = userEvent.setup();
    render(<CartContextProvider><Shop /></CartContextProvider>);
    const add = screen.getAllByTestId("add-card")[0];

    await user.click(add);
    await user.click(add);
    
    expect(screen.getAllByRole("textbox")[0]).toHaveValue("2");
  });

  test("Cards number decreases to 1", async () => {

    const user = userEvent.setup();
    render(<CartContextProvider><Shop /></CartContextProvider>);
    const add = screen.getAllByTestId("add-card")[0];
    const remove = screen.getAllByTestId("remove-card")[0];

    await user.click(add);
    await user.click(add);
    await user.click(remove);
    
    expect(screen.getAllByRole("textbox")[0]).toHaveValue("1");
  });

  test("Cards don't decreases under 0", async () => {

    const user = userEvent.setup();
    render(<CartContextProvider><Shop /></CartContextProvider>);
    const remove = screen.getAllByTestId("remove-card")[0];

    await user.click(remove);
    await user.click(remove);
    expect(screen.getAllByRole("textbox")[0]).toHaveValue("0");
  });
});