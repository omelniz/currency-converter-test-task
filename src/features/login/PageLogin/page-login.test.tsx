import React from "react";
import { render, screen } from "./../../../utils/test-utils";
import { saveAuth, clearAuth } from "./../../../models/Auth";
import PageLogin from "./index";

afterEach(() => {
  clearAuth();
});

it("should have correct test id", () => {
  render(<PageLogin />);

  screen.getByTestId("page-login");
});

it("should render login form", () => {
  render(<PageLogin />);

  screen.getByRole("form", { name: "Login form" });
});

it("should redirect to home when authorized", () => {
  saveAuth();
  render(<PageLogin />);

  expect(screen.queryByTestId("page-login")).toBeNull();
});
