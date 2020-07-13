import React from "react";
import { render, screen } from "@testing-library/react";
import Button, { IButtonProps } from "./index";

const requiredProps = { children: "Text" };
const setup: void = (props: IButtonProps) => render(<Button {...requiredProps} {...props} />);
const getButton = (): JSX.Element => screen.getByRole("button");

it("should be a HTML button", () => {
  setup();

  screen.getByRole("button");
});

it("by default type button", () => {
  setup();

  expect(getButton().type).toBe("button");
});

it("pass type as a prop", () => {
  const type = "submit";
  setup({ type });

  expect(type).not.toBe("button");
  expect(getButton().type).toBe(type);
});

it("render children as a text", () => {
  setup();

  expect(getButton().innerHTML).toBe(requiredProps.children);
});

it("render JSX element as a children", () => {
  setup({ children: <span>Text</span> });

  expect(getButton().innerHTML).toBe("<span>Text</span>");
});

it("should not be full width by default", () => {
  setup();

  expect(getButton().classList.contains("fullWidth")).toBeFalsy();
});

it("represents fullWidth", () => {
  setup({ fullWidth: true });

  expect(getButton().classList.contains("fullWidth")).toBeTruthy();
});

it("not disabled by default", () => {
  setup();

  expect(getButton()).not.toBeDisabled();
});

it("disabled", () => {
  setup({ disabled: true });

  expect(getButton()).toBeDisabled();
});

it("represents custom className", () => {
  const className = "className";
  setup({ className });

  expect(getButton().classList.contains(className)).toBeTruthy();
});
