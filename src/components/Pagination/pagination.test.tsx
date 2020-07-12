import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pagination, { IPaginationProps } from "./index";

const setup = (props: IPaginationProps) => render(<Pagination {...props} />);
const getButtons = () => ({
  prevBtn: screen.getByRole("button", { name: "Prev button" }),
  nextBtn: screen.getByRole("button", { name: "Next button" }),
});

it("should render current page", () => {
  const page = 1;

  setup({ page });
  expect(screen.getByRole("textbox").value).toBe(`${page}`);
});

it("should have callback on input change", async () => {
  const page = "22";
  const onChange = jest.fn();

  setup({ onChange });

  await userEvent.type(screen.getByRole("textbox"), page);
  expect(onChange).toBeCalledWith(page);
});

it("should render next and prev buttons", () => {
  const page = 2;
  const onChange = jest.fn();

  setup({ page, onChange });
  const { prevBtn, nextBtn } = getButtons();

  expect(onChange).not.toBeCalled();

  userEvent.click(prevBtn);
  expect(onChange).toBeCalledWith(page - 1);
  onChange.mockClear();

  userEvent.click(nextBtn);
  expect(onChange).toBeCalledWith(page + 1);
});

it("buttons should be enable for middle pages", () => {
  setup({ page: 2 });
  const { prevBtn, nextBtn } = getButtons();

  expect(prevBtn).not.toBeDisabled();
  expect(nextBtn).not.toBeDisabled();
});

it("disable prev for first page", () => {
  setup({ page: 1 });

  expect(getButtons().prevBtn).toBeDisabled();
});

it("disable next for last page", () => {
  setup({ page: 10, total: 10 });

  expect(getButtons().nextBtn).toBeDisabled();
});

it("should represent total", () => {
  setup({ page: 1, total: 10 });

  expect(screen.getByLabelText("Total pages").innerHTML).toBe(" / 10");
});
