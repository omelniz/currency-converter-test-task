import React from "react";
import { render, screen } from "@testing-library/react";
import FormLogin from "./index";

const setup = () => render(<FormLogin />);

it("should render a form", () => {
  setup();

  screen.getByRole("form", { name: "Login form" });
});

it("should represent a title", () => {
  setup();

  screen.getByRole("heading", { name: "Вход в личный кабинет" });
});

it("should have submit button", () => {
  setup();

  const button = screen.getByRole("button", { name: "Вход arrow-right.svg" });
  expect(button.getAttribute("type")).toBe("submit");
});

it("should represent email field", () => {
  setup();

  const emailField = screen.getByRole("textbox", { name: "Логин" });
  expect(emailField.getAttribute("type")).toBe("email");
  expect(emailField.getAttribute("name")).toBe("email");
  expect(emailField.getAttribute("placeholder")).toBe("user@mail.ru");
});

it("should represent password field", () => {
  setup();

  const passwordField = screen.getByLabelText("Пароль");
  expect(passwordField.getAttribute("type")).toBe("password");
  expect(passwordField.getAttribute("name")).toBe("password");
  expect(passwordField.getAttribute("placeholder")).toBe("*********");
});
