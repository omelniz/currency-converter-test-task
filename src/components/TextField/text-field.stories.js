import React from "react";
import {TextField} from "./index";

export default {
  title: "UI/TextField",
  component: TextField,
};

export const empty = () => <TextField />;
export const withValue = () => <TextField value="value" />;
export const withPlaceholder = () => <TextField placeholder="Placeholder" />;
export const withLabel = () => <TextField label="Label Example" />;
export const withError = () => <TextField value="value" hasError />;
