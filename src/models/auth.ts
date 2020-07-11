import { types, flow, getEnv } from "mobx-state-tree";

const AUTH_TOKEN = "isAuthorized";

const Auth = types
  .model({
    isAuthorized: false,
  })
  .actions((self) => ({
    afterCreate() {
      self.isAuthorized = Boolean(localStorage.getItem(AUTH_TOKEN));
    },

    login: flow(function* login(values) {
      try {
        const { login, password } = values;
        yield getEnv(self).request({ action: "login", login, password });
        localStorage.setItem(AUTH_TOKEN, "true");
        self.isAuthorized = true;
      } catch (err) {
        return err;
      }
    }),
  }));

export default Auth;
