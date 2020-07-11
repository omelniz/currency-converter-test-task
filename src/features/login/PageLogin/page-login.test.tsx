import React from "react";
import { render, screen } from "@testing-library/react";
import PageLogin from "./index";

it("should have correct test id", () => {
  render(<PageLogin />);

  screen.getByTestId("page-login");
});

it("should render login form", () => {
  render(<PageLogin />);

  screen.getByRole("form", { name: "Login form" });
});
