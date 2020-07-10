import React from "react";
import { ArrowRightIcon } from "./../Icons";
import Button from "./index";

export default {
  title: "UI/Button",
  component: Button,
};

export const withText = () => <Button>Sample Text</Button>;
export const fullWidth = () => <Button fullWidth>Sample Text</Button>;
export const submit = () => <Button type="submit">Submit</Button>;
export const withIcon = () => (
  <Button>
    Submit <ArrowRightIcon />
  </Button>
);
