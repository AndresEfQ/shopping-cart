import React from "react";
import { render } from "@testing-library/react";
import Shop from "../routes/Shop";

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponseOnce(JSON.stringify({sets: []}));
});

describe("Shop component", () => {

  test("Renders correctly", () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  })

  test("Fetches data on mount", async () => {
    render(<Shop />)
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});