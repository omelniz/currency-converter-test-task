import React from "react";
import PropTypes from "prop-types";
import "mobx-react-lite/batchingForReactDom";
import createStore, { StoreProvider } from "../models/store";
import { render } from "@testing-library/react";

const AllTheProviders = ({ children }) => {
  return <StoreProvider value={createStore()}>{children}</StoreProvider>;
};

AllTheProviders.propTypes = {
  children: PropTypes.element.isRequired,
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };