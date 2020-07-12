import React from "react";
import request from "./../../../utils/request";
import { render, screen } from "./../../../utils/test-utils";
import { saveAuth, clearAuth } from "./../../../models/Auth";
import { items } from "./../HistoryTable/history.mock";
import PageHistory from "./index";

jest.mock("./../../../utils/request");
request.mockResolvedValue(items);

const setup = () => render(<PageHistory />);

afterEach(() => {
  clearAuth();
  request.mockClear();
});

it("should have correct test id", () => {
  saveAuth();
  setup();

  screen.getByTestId("page-history");
});

it("should request rates", () => {
  saveAuth();
  setup();

  expect(request).toBeCalledWith({ action: "history" });
});

it("should render history table", async () => {
  saveAuth();

  await setup();

  screen.getByTestId("history");
});

it("should redirect to home when authorized", () => {
  setup();

  expect(screen.queryByTestId("page-history")).toBeNull();
});
