import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import CurrencyRates, { ICurrencyRatesProps } from "./index";
import rates, { items } from "./rates.mock";

const setup = (props?: ICurrencyRatesProps) => render(<CurrencyRates {...props} />);
const getRows = () => screen.getAllByRole("row").slice(1);

it("should represent empty state by default", () => {
  setup();

  expect(getRows()).toEqual([]);
});

it("should represent columns names", () => {
  setup();

  screen.getByRole("columnheader", { name: "" });
  screen.getByRole("columnheader", { name: "Валютная пара" });
  screen.getByRole("columnheader", { name: "Котировка" });
  screen.getByRole("columnheader", { name: "Дата получения" });
});

it("render items", () => {
  setup({ items: rates.items });

  const rows = getRows();

  rows.forEach((item, index) => {
    const cells = item.querySelectorAll("td");
    expect(cells[1].innerHTML).toBe(rates.items[index].asset);
    expect(cells[2].innerHTML).toBe(rates.items[index].quote);
    expect(cells[3].innerHTML).toBe(rates.items[index].startDate);
  });

  expect(rows.length).toBe(rates.items.length);
});

it("each item should have callback on start click", () => {
  setup({ items: rates.items });

  const rows = getRows();

  rows.forEach(async (item, index) => {
    await userEvent.click(item.querySelector("svg"));
  });
});

it("should represent favorited items", () => {
  const favorited = rates.items.filter((item) => item.isActive);

  expect(favorited.length).toBeGreaterThan(0);

  setup({ items: rates.items });

  screen.getAllByRole("button").forEach((el, index) => {
    expect(el.classList.contains("star")).toBeTruthy();
    expect(el.classList.contains("filledStar")).toBe(!!rates.items[index].isActive);
  });
});
