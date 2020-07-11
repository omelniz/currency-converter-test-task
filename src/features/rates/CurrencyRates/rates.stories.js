import React from "react";
import { action } from "@storybook/addon-actions";
import CurrencyRates from "./index";
import { items } from "./rates.mock";

const onToggleFavorite = action("onToggleFavorite");

export default {
  title: "Components/CurrencyRates",
  component: CurrencyRates,
};

export const empty = () => <CurrencyRates onToggleFavorite={onToggleFavorite} />;
export const withItems = () => <CurrencyRates onToggleFavorite={onToggleFavorite} items={items} />;
