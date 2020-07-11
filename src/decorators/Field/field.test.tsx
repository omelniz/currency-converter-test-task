import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import field, { IFieldProps } from "./index";

const meta = { touched: false, error: "" };
const input = { name: "name", value: "value", onChange: jest.fn(), type: "email", placeholder: "placeholder" };
const Input: React.FC<any> = ({ hasError, ...props }) => <input {...props} aria-invalid={hasError} />;
const FieldInput: React.FC = field(Input);
const setup: React.FC = (props: IFieldProps) => render(<FieldInput input={input} meta={meta} {...props} />);

it("should render component", () => {
  setup();

  screen.getByRole("textbox");
});

it("should pass input props to component", () => {
  setup();

  const field = screen.getByRole("textbox");
  expect(field.getAttribute("name")).toBe(input.name);
  expect(field.getAttribute("value")).toBe(input.value);
  expect(field.getAttribute("type")).toBe(input.type);
});

it("should pass onChange callback", () => {
  setup();

  expect(input.onChange).not.toBeCalled();

  userEvent.type(screen.getByRole("textbox"), "123");
  expect(input.onChange).toBeCalled();
});

it("should not represent an error by default", () => {
  setup();

  expect(screen.getByRole("textbox").getAttribute("aria-invalid")).toBe("false");
});

it("should not represent an error when only touched", () => {
  setup({ meta: { touched: true, error: "" } });

  expect(screen.getByRole("textbox").getAttribute("aria-invalid")).toBe("false");
  expect(screen.queryAllByRole("alert").length).toBeFalsy();
});

it("should represent an error", () => {
  const error = "Custom error";
  setup({ meta: { touched: true, error } });

  expect(screen.getByRole("textbox").getAttribute("aria-invalid")).toBe("true");
  expect(screen.getByRole("alert").innerHTML).toBe(error);
});
