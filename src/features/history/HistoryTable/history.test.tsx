import React from "react";
import { render, screen } from "@testing-library/react";
import HistoryTable, { IHistoryTableProps, formatDate } from "./index";
import { items } from "./history.mock";

const setup = (props?: IHistoryTableProps) => render(<HistoryTable {...props} />);
const getRows = () => screen.getAllByRole("row").slice(1);

it("should represent empty state by default", () => {
  setup();

  expect(getRows()).toEqual([]);
});

it("should represent columns names", () => {
  setup();

  screen.getByRole("columnheader", { name: "Актив" });
  screen.getByRole("columnheader", { name: "Начало" });
  screen.getByRole("columnheader", { name: "Конец" });
  screen.getByRole("columnheader", { name: "Прибыль" });
  expect(screen.getAllByRole("columnheader", { name: "Котировка" }).length).toBe(2);
});

it("render items", () => {
  setup({ items });

  const rows = getRows();

  rows.forEach((item, index) => {
    const cells = item.querySelectorAll("td");
    expect(cells[0].innerHTML).toBe(items[index].asset);
    expect(cells[1].innerHTML).toBe(formatDate(items[index].startDate));
    expect(cells[2].innerHTML).toBe(items[index].startQuote);
    expect(cells[3].innerHTML).toBe(formatDate(items[index].finishDate));
    expect(cells[4].innerHTML).toBe(items[index].finishQuote);
    expect(cells[5].innerHTML).toBe(items[index].profit);
  });

  expect(rows.length).toBe(items.length);
});
