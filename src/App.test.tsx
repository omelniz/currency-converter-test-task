import React from "react";
import { render, screen } from "./utils/test-utils";
import App from "./App";

test("render login page by default", () => {
  render(<App />);

  screen.getByTestId("page-login");
});

it("should represent a header", () => {
  render(<App />);

  screen.getByTestId("header");
});
