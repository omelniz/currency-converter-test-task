import React from "react";
import { render, screen, userEvent } from "./../../utils/test-utils";
import { Header } from "./index";

it("should be a HTML header", () => {
  render(<Header />);

  screen.getByRole("banner");
});

it("should represent a logo", () => {
  render(<Header />);

  screen.getByRole("heading", { name: "TEST SPA app" });
});

it("should not represent logout button by default", () => {
  render(<Header />);

  expect(screen.queryByRole("button", { name: "Выход" })).toBeNull();
});

it("should represent logout button for authorized user", () => {
  const onLogout = jest.fn();

  render(<Header onLogout={onLogout} isAuthorized />);

  const logoutBtn = screen.getByRole("button", { name: "Выход" });

  userEvent.click(logoutBtn);
  expect(onLogout).toBeCalled();
});

it("should represent home link as a logo", () => {
  render(<Header />);

  screen.getByRole("link", { name: "TEST SPA app" });
});
