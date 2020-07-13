import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ratesModel from "./../../rates/CurrencyRates/rates.mock";
import FormConverter from "./index";

const rates = ratesModel.getRatesTable;

const setup = (props) => render(<FormConverter {...props} />);
const getSubmitBtn = () => screen.getByRole("button");
const getOptions = (select) => select.querySelectorAll("option");
const getFields = () => ({
  selectFrom: screen.getByRole("combobox", { name: "Select from" }),
  selectTo: screen.getByRole("combobox", { name: "Select to" }),
  fieldAmount: screen.getByRole("spinbutton", { name: "Сумма" }),
});

it("should render a form", () => {
  setup();

  screen.getByRole("form", { name: "Converter form" });
});

it("should have submit button", () => {
  setup();

  expect(getSubmitBtn().getAttribute("type")).toBe("submit");
});

it("should represent amount field", () => {
  setup();

  const { fieldAmount } = getFields();
  expect(fieldAmount.getAttribute("type")).toBe("number");
  expect(fieldAmount.getAttribute("name")).toBe("amount");
});

it("should represent from select", () => {
  setup();

  const { selectFrom } = getFields();

  expect(selectFrom.getAttribute("name")).toBe("from");
  expect(selectFrom.value).toBe("");
  expect(selectFrom.querySelectorAll("option")).toHaveLength(0);
});

it("should represent to select", () => {
  setup();

  const { selectTo } = getFields();

  expect(selectTo.getAttribute("name")).toBe("to");
  expect(selectTo.value).toBe("");
  expect(selectTo.querySelectorAll("option")).toHaveLength(0);
});

it("should represent result by default", () => {
  setup({ rates });

  expect(screen.queryByLabelText("Result")).toBeNull();
});

it("should make initial options from rates", () => {
  setup({ rates });

  const { selectFrom, selectTo } = getFields();

  expect(getOptions(selectFrom)).toHaveLength(Object.keys(rates).length);
  expect(getOptions(selectTo)).toHaveLength(1);
});

it("should calculate result", () => {
  setup({ rates });

  userEvent.click(getSubmitBtn());

  expect(screen.queryByLabelText("Result").innerHTML).toBe("<h6>Итого</h6><p>1.12</p>");
});
