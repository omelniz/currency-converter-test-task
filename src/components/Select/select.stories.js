import React from "react";
import {Select} from "./index";

const options = [
  { label: "Label 1", value: 1 },
  { label: "Label 2", value: 2 },
];

export default {
  title: "UI/Select",
  component: Select,
};

export const empty = () => <Select />;
export const withValue = () => <Select options={options} value={options[0].value} />;
