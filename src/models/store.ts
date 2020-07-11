import { useContext, createContext } from "react";
import { types } from "mobx-state-tree";
import request from "./../utils/request";
import Auth from "./Auth";

const RootStore = types.model("RootStore", {
  auth: Auth,
});

const StoreContext = createContext({});
const StoreProvider = StoreContext.Provider;
const useStore = () => useContext(StoreContext);
const createStore = () => RootStore.create({ auth: Auth.create() }, { request });

export { useStore, StoreProvider };
export default createStore;
