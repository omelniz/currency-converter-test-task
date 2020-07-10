import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextField, { ITextField } from "./index";

const name = "name";
const label = "label";
const id = "id";
const className = "className";
const requiredProps = { name, label, id };

const setup = (props: ITextField) => render(<TextField {...requiredProps} {...props} />);
const getInput = () => screen.getByRole("textbox");

it("should be an HTML input", () => {
  setup();

  screen.getByRole("textbox");
});

it("should be empty by default", () => {
  setup();

  expect(getInput().value).toBe("");
});

it("should pass value from props", () => {
  const value = "value";
  const onChange = () => {};
  setup({ value, onChange });

  expect(getInput().value).toBe(value);
});

it("should represent name", () => {
  setup();

  expect(getInput().name).toBe(name);
});

it("should not have a placeholder by default", () => {
  setup();

  expect(getInput().placeholder).toBe("");
});

it("should pass placeholder from props", () => {
  const placeholder = "placeholder";
  setup({ placeholder });

  expect(getInput().placeholder).toBe(placeholder);
});

it("should represent a label", () => {
  setup();

  expect(screen.getByText(label).htmlFor).toBe(id);
});

it("should not have a className by default", () => {
  setup();

  expect(screen.getByTestId("text-field").classList.contains(className)).toBeFalsy();
});

it("should pass className from props", () => {
  setup({ className });

  expect(screen.getByTestId("text-field").classList.contains(className)).toBeTruthy();
});

it("should be text input by default", () => {
  setup();

  expect(getInput().type).toBe("text");
});

it("should represent email input", () => {
  setup({ type: "email" });

  expect(getInput().type).toBe("email");
});

it("should have callback on change", async () => {
  const onChange = jest.fn();

  setup({onChange});

  expect(onChange).not.toBeCalled();

  await userEvent.type(getInput(), "value");
  expect(onChange).toBeCalled();
});
