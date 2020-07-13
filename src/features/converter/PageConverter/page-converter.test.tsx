import React from "react";
import request from "utils/request";
import { render, screen } from "utils/test-utils";
import { saveAuth, clearAuth } from "models/Auth";
import { items } from "./../../rates/CurrencyRates/rates.mock";
import PageConverter from "./index";

jest.mock("utils/request");
request.mockResolvedValue({ assets: items });

const setup = () => render(<PageConverter />);

afterEach(() => {
  clearAuth();
  request.mockClear();
});

it("should have correct test id", () => {
  saveAuth();
  setup();

  screen.getByTestId("page-converter");
});

it("should request rates", () => {
  saveAuth();
  setup();

  expect(request).toBeCalledWith({ action: "quote" });
});

it("should render converter form", () => {
  saveAuth();
  setup();

  screen.getByRole("form", { name: "Converter form" });
});

it("should represent title", () => {
  saveAuth();
  setup();

  screen.getByRole("heading", { name: "Конвертация валют" });
});
