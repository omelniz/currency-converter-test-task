import { useContext, createContext } from "react";
import { types } from "mobx-state-tree";
import request from "./../utils/request";
import Auth from "./Auth";
import Rates from "./Rates";
import History from "./History";

const RootStore = types.model("RootStore", {
  auth: Auth,
  rates: Rates,
  history: History,
});

const StoreContext = createContext({});
const StoreProvider = StoreContext.Provider;
const useStore = () => useContext(StoreContext);
const createStore = () =>
  RootStore.create(
    {
      auth: Auth.create(),
      rates: Rates.create(),
      history: History.create(),
    },
    { request },
  );

export { useStore, StoreProvider };
export default createStore;
