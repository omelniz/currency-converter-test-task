import { types, flow, getEnv } from "mobx-state-tree";

const AUTH_TOKEN = "isAuthorized";

export function getAuth() {
  return Boolean(localStorage.getItem(AUTH_TOKEN));
}

export function saveAuth() {
  localStorage.setItem(AUTH_TOKEN, "true");
}

export function clearAuth() {
  localStorage.removeItem(AUTH_TOKEN);
}

const Auth = types
  .model({
    isAuthorized: false,
  })
  .actions((self) => ({
    afterCreate() {
      self.isAuthorized = getAuth();
    },

    login: flow(function* login(values) {
      try {
        const { login, password } = values;
        yield getEnv(self).request({ action: "login", login, password });

        saveAuth();
        self.isAuthorized = true;
      } catch (err) {
        return err;
      }
    }),

    logout: function () {
      self.isAuthorized = false;
      clearAuth();
    },
  }));

export default Auth;
