import React from "react";
import HistoryTable from "./index";
import { items } from "./history.mock";

export default {
  title: "Components/HistoryTable",
  component: HistoryTable,
};

export const empty = () => <HistoryTable />;
export const withItems = () => <HistoryTable items={items} />;
