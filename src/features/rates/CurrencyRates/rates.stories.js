import React from "react";
import CurrencyRates from "./index";
import items from "./rates.mock";

export default {
  title: "Components/CurrencyRates",
  component: CurrencyRates,
};

export const empty = () => <CurrencyRates />;
export const withItems = () => <CurrencyRates items={items} />;
