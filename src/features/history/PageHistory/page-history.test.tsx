import React from "react";
import request from "utils/request";
import { render, screen } from "utils/test-utils";
import { items } from "./../HistoryTable/history.mock";
import PageHistory from "./index";

jest.mock("utils/request");
request.mockResolvedValue(items);

const setup = () => render(<PageHistory />);

it("should have correct test id", () => {
  setup();

  screen.getByTestId("page-history");
});

it("should request rates", () => {
  setup();

  expect(request).toBeCalledWith({ action: "history" });
});

it("should render history table", () => {
  setup();

  screen.getByTestId("history");
});

it("should have pagination", () => {
  setup();

  screen.getByRole("navigation", { name: "Pagination" });
});
