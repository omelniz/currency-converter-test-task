import React from "react";
import {action} from "@storybook/addon-actions";
import {Header} from "./index";

export default {
  title: "UI/Header",
  component: Header,
};

export const base = () => <Header />;
export const authorized = () => <Header onLogout={action("onLogout")} isAuthorized />;
