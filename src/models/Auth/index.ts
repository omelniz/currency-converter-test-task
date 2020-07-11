import { types, flow, getEnv } from "mobx-state-tree";

export const AUTH_TOKEN = "isAuthorized";

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

    logout: function () {
      self.isAuthorized = false;
      localStorage.removeItem(AUTH_TOKEN);
    },
  }));

export default Auth;
