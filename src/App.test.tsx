import React from "react";
import { render, screen } from "./utils/test-utils";
import { saveAuth, clearAuth } from "./models/Auth";
import ROUTES from "./utils/routes";
import App from "./App";

afterEach(() => {
  clearAuth();
});

const getNav = () => ({
  home: screen.getByRole("link", { name: "Курсы валют" }),
  converter: screen.getByRole("link", { name: "Конвертор" }),
  history: screen.getByRole("link", { name: "История" }),
});

test("render login page by default", () => {
  render(<App />);

  screen.getByTestId("page-login");
});

it("should represent a header", () => {
  render(<App />);

  screen.getByTestId("header");
});

it("should render navigation", () => {
  saveAuth();
  render(<App />);

  screen.getByRole("navigation");

  const { home, converter, history } = getNav();

  expect(home.getAttribute('href')).toBe(ROUTES.HOME);
  expect(converter.getAttribute('href')).toBe(ROUTES.CONVERTER);
  expect(history.getAttribute('href')).toBe(ROUTES.HISTORY);
});
