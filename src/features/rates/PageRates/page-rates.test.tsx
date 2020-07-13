import React from "react";
import request from "./../../../utils/request";
import { render, screen } from "./../../../utils/test-utils";
import { saveAuth, clearAuth } from "./../../../models/Auth";
import { items } from "./../CurrencyRates/rates.mock";
import PageRates from "./index";

jest.mock("./../../../utils/request");
request.mockResolvedValue({ assets: items });

const setup = () => render(<PageRates />);

afterEach(() => {
  clearAuth();
  request.mockClear();
});

it("should have correct test id", () => {
  saveAuth();
  setup();

  screen.getByTestId("page-rates");
});

it("should request rates", () => {
  saveAuth();
  setup();

  expect(request).toBeCalledWith({ action: "quote" });
});

it("should render currency rates", async () => {
  saveAuth();

  await setup();

  screen.getByTestId("currency-rates");
  expect(screen.getAllByRole("row").slice(1).length).toBe(items.length);
});
