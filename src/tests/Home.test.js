import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../routes/Home";

describe("Home component", () => {

  test("Renders correctly", () => {
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    expect(container).toMatchSnapshot();
  });
});