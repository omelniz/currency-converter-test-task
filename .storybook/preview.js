import React from "react";
import { StaticRouter } from "react-router-dom";
import { addDecorator } from "@storybook/react";
import createStore, { StoreProvider } from "./../src/models/store";
import "./../src/index.css";

const withStore = (story) => <StoreProvider value={createStore()}>{story()}</StoreProvider>;
const withRouter = (story) => <StaticRouter history={history}>{story()}</StaticRouter>;

addDecorator(withStore);
addDecorator(withRouter);
