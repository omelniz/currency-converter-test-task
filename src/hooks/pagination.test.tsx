import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import usePagination from "./pagination";

const list = [...Array(102).keys()];

function Example({ list }) {
  const { page, onPageChange, total, items } = usePagination(list);

  return (
    <div>
      <p aria-label="items">{JSON.stringify(items)}</p>
      <p aria-label="page">{page}</p>
      <p aria-label="total">{total}</p>
      <button onClick={() => onPageChange(page + 1)}>next</button>
      <button onClick={() => onPageChange(page - 1)}>prev</button>
    </div>
  );
}

const setup = () => render(<Example list={list} />);
const getElements = () => ({
  page: screen.getByLabelText("page"),
  total: screen.getByLabelText("total"),
  items: screen.getByLabelText("items"),
  next: screen.getByRole("button", { name: "next" }),
  prev: screen.getByRole("button", { name: "prev" }),
});

it("page 1 by default", () => {
  setup();

  expect(getElements().page.innerHTML).toBe("1");
  expect(getElements().items.innerHTML).toBe("[0,1,2,3,4,5,6,7,8,9]");
});

it("correct total", () => {
  setup();

  expect(getElements().total.innerHTML).toBe("11");
});

it("correct total", () => {
  setup();

  expect(getElements().total.innerHTML).toBe("11");
});

it("toggle page", () => {
  setup();

  const { next, prev, page, items } = getElements();

  userEvent.click(next);
  expect(page.innerHTML).toBe("2");
  expect(items.innerHTML).toBe("[10,11,12,13,14,15,16,17,18,19]");

  userEvent.click(next);
  expect(page.innerHTML).toBe("3");
  expect(items.innerHTML).toBe("[20,21,22,23,24,25,26,27,28,29]");

  userEvent.click(prev);
  expect(page.innerHTML).toBe("2");
  expect(items.innerHTML).toBe("[10,11,12,13,14,15,16,17,18,19]");
});
