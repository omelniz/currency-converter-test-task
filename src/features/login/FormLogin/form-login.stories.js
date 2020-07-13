import React from "react";
import { action } from "@storybook/addon-actions";
import FormLogin from "./index";

export default {
  title: "Forms/FormLogin",
  component: FormLogin,
};

export const base = () => <FormLogin onSubmit={action("onSubmit")} />;
