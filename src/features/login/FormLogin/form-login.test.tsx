import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FORM_ERROR } from "final-form";
import FormLogin, { ERRORS } from "./index";

const validData = {
  login: "correct@email.com",
  password: "1234567",
};
const onSubmit = jest.fn();
const setup = () => render(<FormLogin onSubmit={onSubmit} />);
const getFields = () => ({
  emailField: screen.getByRole("textbox", { name: "Логин" }),
  passwordField: screen.getByLabelText("Пароль"),
});
const getSubmitBtn = () => screen.getByRole("button");
const sleep = () => new Promise((r) => setTimeout(r, 0));
const submitForm = async (data) => {
  const { emailField, passwordField } = getFields();

  await userEvent.type(emailField, data.login);
  await userEvent.type(passwordField, data.password);

  userEvent.click(getSubmitBtn());
};

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

  expect(getSubmitBtn().getAttribute("type")).toBe("submit");
});

it("should represent email field", () => {
  setup();

  const emailField = screen.getByRole("textbox", { name: "Логин" });
  expect(emailField.getAttribute("type")).toBe("email");
  expect(emailField.getAttribute("name")).toBe("login");
  expect(emailField.getAttribute("placeholder")).toBe("user@mail.ru");
});

it("should represent password field", () => {
  setup();

  const passwordField = screen.getByLabelText("Пароль");
  expect(passwordField.getAttribute("type")).toBe("password");
  expect(passwordField.getAttribute("name")).toBe("password");
  expect(passwordField.getAttribute("placeholder")).toBe("*********");
});

it("should not represents errors by default", () => {
  setup();

  Object.values(getFields()).forEach((field) => {
    expect(field).toBeValid();
  });
});

it("all field should be required", () => {
  setup();

  userEvent.click(getSubmitBtn());

  Object.values(getFields()).forEach((field) => {
    expect(field).toBeInvalid();
  });

  const errors = screen.getAllByRole("alert");
  errors.forEach((error) => {
    expect(error.innerHTML).toBe(ERRORS.REQUIRED);
  });

  expect(errors.length).toBe(2);
});

it("should validate an email", async () => {
  setup();

  const { emailField } = getFields();
  const emailErrorREGEX = /Введите корректный емайл/i;

  userEvent.click(getSubmitBtn());
  expect(screen.queryByText(emailErrorREGEX)).not.toBeInTheDocument();

  await userEvent.type(emailField, "user");
  screen.getByText(emailErrorREGEX);

  await userEvent.type(emailField, "user@");
  screen.getByText(emailErrorREGEX);

  await userEvent.type(emailField, "user@gmail");
  screen.getByText(emailErrorREGEX);

  await userEvent.type(emailField, "user@gmail.com");
  expect(screen.queryByText(emailErrorREGEX)).not.toBeInTheDocument();
});

it("should validate a password", async () => {
  setup();

  const { passwordField } = getFields();

  userEvent.click(getSubmitBtn());

  await userEvent.type(passwordField, "123");
  screen.getByText(/Минимальное количество символов 7/i);

  await userEvent.type(passwordField, "1234567");
  expect(screen.queryByText(/Минимальное количество символов 7/i)).not.toBeInTheDocument();
});

it("should have callback onSubmit", async () => {
  setup();

  onSubmit.mockReset();
  await submitForm(validData);

  expect(onSubmit).toHaveBeenCalled();
  expect(onSubmit.mock.calls[0][0]).toEqual(validData);
});

it("should not represent submit error by default", () => {
  setup();

  expect(screen.queryByRole("alert")).toBeNull();
});

it("should represent submit error", async () => {
  const error = "error";
  onSubmit.mockReturnValueOnce({ [FORM_ERROR]: error });

  setup();
  await submitForm(validData);
  screen.getByText(error);
});

it("should disable submit button on submitting state", async () => {
  let resolve;

  onSubmit.mockReturnValue(
    new Promise((r) => {
      resolve = r;
    }),
  );

  setup();

  const submitBtn = getSubmitBtn();
  expect(submitBtn).toBeEnabled();

  await act(async () => {
    await submitForm(validData);
    expect(submitBtn).toBeDisabled();
  });

  await act(async () => {
    resolve();
    await sleep();
    expect(submitBtn).toBeEnabled();
  });
});
